const disclaimers = [
  "Os resultados podem variar de pessoa para pessoa. O programa Menos 3kg em 10 Dias é um guia nutricional baseado em princípios de redução de inflamação e desintoxicação metabólica. A perda de peso mencionada refere-se principalmente à eliminação de retenção hídrica, glicogênio muscular e redução de inflamação sistêmica — não exclusivamente à queima de gordura corporal.",
  "Este produto não substitui orientação médica ou nutricional profissional. Consulte um médico antes de iniciar qualquer protocolo nutricional, especialmente se possui condições médicas pré-existentes. Mulheres grávidas ou lactantes NÃO devem seguir este protocolo sem supervisão médica.",
  "Imagens meramente ilustrativas. Resultados reais variam conforme adesão ao protocolo e características individuais.",
  "Garantia incondicional de 7 dias a partir da data de compra. Processamento do reembolso em até 7 dias úteis após a solicitação.",
  "Produto 100% digital, entregue via acesso online imediatamente após a confirmação do pagamento. Não enviamos materiais físicos.",
  "Seus dados pessoais são protegidos conforme a LGPD. Pagamentos processados por plataformas seguras com criptografia SSL.",
];

const FooterSection = () => (
  <footer className="py-12 md:py-16 bg-[hsl(0_0%_18%)] text-[hsl(0_0%_60%)]">
    <div className="container max-w-3xl">
      <h3 className="text-xs uppercase tracking-widest font-bold mb-6 text-[hsl(0_0%_45%)]">
        Aviso Legal e Disclaimers
      </h3>

      <div className="space-y-4 mb-10">
        {disclaimers.map((d, i) => (
          <p key={i} className="text-xs leading-relaxed">* {d}</p>
        ))}
      </div>

      <div className="border-t border-[hsl(0_0%_25%)] pt-8 text-center space-y-2">
        <p className="text-xs">© 2026 Operação 3 em 10. Todos os direitos reservados.</p>
        <p className="text-xs">CNPJ: 62.568.265/0001-48</p>
        <p className="text-xs">contatoshapeinsano@gmail.com</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="#" className="text-xs hover:text-white transition-colors underline-offset-2 hover:underline">Termos de Uso</a>
          <a href="#" className="text-xs hover:text-white transition-colors underline-offset-2 hover:underline">Política de Privacidade</a>
          <a href="#faq" className="text-xs hover:text-white transition-colors underline-offset-2 hover:underline">FAQ</a>
        </div>
      </div>
    </div>
  </footer>
);

export default FooterSection;
