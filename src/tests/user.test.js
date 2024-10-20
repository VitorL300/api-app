import User from '../models/User.js';

describe('User Model', () => {
    it('should validate a valid User instance', () => {
        const user = new User({
            email: 'test@example.com',
            tokens: 'some-token',
            senha: 'password123',
            nome: 'John Doe',
            telefone: '+1234567890',
            niveldeconcientizacao: 3,
            ismonitor: true
        });
        const validation = user.validate();
        expect(validation.valid).toBe(true);
        expect(validation.errors).toHaveLength(0);
    });

    it('should invalidate User with invalid email', () => {
        const user = new User({
            email: 'invalid-email',
            tokens: 'some-token',
            senha: 'password123',
            nome: 'John Doe',
            telefone: '+1234567890',
            niveldeconcientizacao: 3,
            ismonitor: true
        });
        const validation = user.validate();
        expect(validation.valid).toBe(false);
        expect(validation.errors).toContain('Email inválido.');
    });

    it('should invalidate User with short nome', () => {
        const user = new User({
            email: 'test@example.com',
            tokens: 'some-token',
            senha: 'password123',
            nome: 'Jo',
            telefone: '+1234567890',
            niveldeconcientizacao: 3,
            ismonitor: true
        });
        const validation = user.validate();
        expect(validation.valid).toBe(false);
        expect(validation.errors).toContain('Nome deve ter entre 3 e 51 caracteres.');
    });

    it('should invalidate User with invalid tokens', () => {
        const user = new User({
            email: 'test@example.com',
            tokens: 12345, // tokens should be a string
            senha: 'password123',
            nome: 'John Doe',
            telefone: '+1234567890',
            niveldeconcientizacao: 3,
            ismonitor: true
        });
        const validation = user.validate();
        expect(validation.valid).toBe(false);
        expect(validation.errors).toContain('Token inválido.');
    });

    it('should invalidate User with invalid telefone', () => {
        const user = new User({
            email: 'test@example.com',
            tokens: 'some-token',
            senha: 'password123',
            nome: 'John Doe',
            telefone: '12345', // invalid phone number
            niveldeconcientizacao: 3,
            ismonitor: true
        });
        const validation = user.validate();
        expect(validation.valid).toBe(false);
        expect(validation.errors).toContain('Número de telefone inválido.');
    });

    it('should invalidate User with short senha', () => {
        const user = new User({
            email: 'test@example.com',
            tokens: 'some-token',
            senha: '123', // senha too short
            nome: 'John Doe',
            telefone: '+1234567890',
            niveldeconcientizacao: 3,
            ismonitor: true
        });
        const validation = user.validate();
        expect(validation.valid).toBe(false);
        expect(validation.errors).toContain('A senha precisa ter entre 6 e 255 caracteres.');
    });

    it('should invalidate User with invalid niveldeconcientizacao', () => {
        const user = new User({
            email: 'test@example.com',
            tokens: 'some-token',
            senha: 'password123',
            nome: 'John Doe',
            telefone: '+1234567890',
            niveldeconcientizacao: 6, // invalid niveldeconcientizacao
            ismonitor: true
        });
        const validation = user.validate();
        expect(validation.valid).toBe(false);
        expect(validation.errors).toContain('Nível de conscientização deve ser um número entre 0 e 5.');
    });
});
