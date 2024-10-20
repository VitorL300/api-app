import Receita from '../models/Receita.js';

describe('Receita Model', () => {
    it('should construct a Receita with the same data as passed', () => {
        const receita = new Receita({
            codigo: 1,
            titulo: 'Bolo de Chocolate',
            imgURL: 'http://example.com/bolo.jpg',
            conteudo: 'Receita de bolo de chocolate deliciosa.',
            categoria: 'Sobremesa',
            verificado: true,
            tema: 'Chocolate',
            autor: 'Chef João',
            verificadoPor: 'Chef Maria'
        });
        expect(receita).not.toBeNull();
        expect(receita).toBeDefined();
        expect(receita).toBeInstanceOf(Receita);
        expect(receita.codigo).toBe(1);
        expect(receita.titulo).toBe('Bolo de Chocolate');
        expect(receita.imgURL).toBe('http://example.com/bolo.jpg');
        expect(receita.conteudo).toBe('Receita de bolo de chocolate deliciosa.');
        expect(receita.categoria).toBe('Sobremesa');
        expect(receita.verificado).toBe(true);
        expect(receita.tema).toBe('Chocolate');
        expect(receita.autor).toBe('Chef João');
        expect(receita.verificadoPor).toBe('Chef Maria');
    });

    it('should validate a valid Receita instance', () => {
        const receita = new Receita({
            codigo: 1,
            titulo: 'Bolo de Chocolate',
            imgURL: 'http://example.com/bolo.jpg',
            conteudo: 'Receita de bolo de chocolate deliciosa.',
            categoria: 'Sobremesa',
            verificado: true,
            tema: 'Chocolate',
            autor: 'Chef João',
            verificadoPor: 'Chef Maria'
        });
        const validation = receita.validate();
        expect(validation.valid).toBe(true);
        expect(validation.errors).toHaveLength(0);
    });

    it('should invalidate Receita with short titulo', () => {
        const receita = new Receita({
            titulo: 'Bo',
            imgURL: 'http://example.com/bolo.jpg',
            conteudo: 'Receita de bolo de chocolate deliciosa.',
            categoria: 'Sobremesa',
            verificado: true,
            tema: 'Chocolate',
            autor: 'Chef João',
            verificadoPor: 'Chef Maria'
        });
        const validation = receita.validate();
        expect(validation.valid).toBe(false);
        expect(validation.errors).toContain('Título deve ter entre 3 e 100 caracteres.');
    });

    // Adicione mais testes conforme necessário para cobrir todos os casos de validação
});
