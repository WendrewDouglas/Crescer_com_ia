import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de Privacidade da Crescer com IA. Como coletamos, usamos e protegemos seus dados pessoais, em conformidade com a LGPD.",
};

export default function PrivacidadePage() {
  return (
    <main className="bg-background py-20">
      <Container>
        <article className="prose prose-lg mx-auto max-w-3xl text-foreground/80">
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
            Política de Privacidade
          </h1>
          <p className="text-sm text-muted-foreground">
            Última atualização: 17 de março de 2026
          </p>

          <p>
            A <strong>Crescer com IA</strong> leva a privacidade dos seus dados
            a sério. Esta política explica, de forma clara e direta, como
            coletamos, usamos, armazenamos e protegemos as informações pessoais
            que você compartilha conosco, em total conformidade com a{" "}
            <strong>
              Lei Geral de Proteção de Dados (LGPD, Lei nº 13.709/2018)
            </strong>
            .
          </p>

          <h2>1. Quem somos</h2>
          <p>
            A Crescer com IA é um programa educacional presencial de
            Inteligência Artificial para crianças de 7 a 12 anos, com sede em
            Araçatuba, SP. Somos os responsáveis pelo tratamento dos dados
            pessoais coletados por meio deste site e dos nossos canais de
            comunicação.
          </p>

          <h2>2. Quais dados coletamos</h2>
          <p>Podemos coletar as seguintes informações:</p>
          <ul>
            <li>
              <strong>Dados de contato:</strong> nome, e-mail, telefone e
              WhatsApp, fornecidos voluntariamente ao entrar em contato conosco
              ou solicitar informações.
            </li>
            <li>
              <strong>Dados do aluno:</strong> nome e idade da criança,
              fornecidos no momento da matrícula.
            </li>
            <li>
              <strong>Dados de navegação:</strong> informações técnicas como
              endereço IP, tipo de navegador e páginas acessadas, coletadas
              automaticamente para melhorar a experiência no site.
            </li>
          </ul>

          <h2>3. Como usamos seus dados</h2>
          <p>Utilizamos seus dados pessoais para:</p>
          <ul>
            <li>Responder às suas dúvidas e solicitações</li>
            <li>Realizar a matrícula e acompanhamento do aluno</li>
            <li>
              Enviar informações sobre o curso, turmas e materiais educativos
              (apenas com seu consentimento)
            </li>
            <li>Melhorar nosso site e nossos serviços</li>
            <li>Cumprir obrigações legais</li>
          </ul>

          <h2>4. Base legal para o tratamento</h2>
          <p>
            O tratamento dos seus dados é realizado com base nas seguintes
            hipóteses legais previstas na LGPD:
          </p>
          <ul>
            <li>
              <strong>Consentimento:</strong> quando você fornece seus dados
              voluntariamente (Art. 7º, I)
            </li>
            <li>
              <strong>Execução de contrato:</strong> para viabilizar a
              matrícula e prestação do serviço educacional (Art. 7º, V)
            </li>
            <li>
              <strong>Interesse legítimo:</strong> para melhorias no site e
              comunicação relevante (Art. 7º, IX)
            </li>
          </ul>

          <h2>5. Proteção de dados de crianças</h2>
          <p>
            Por atendermos crianças de 7 a 12 anos, tratamos seus dados com
            cuidado redobrado, conforme o Art. 14 da LGPD:
          </p>
          <ul>
            <li>
              Os dados de crianças só são coletados com o consentimento
              específico de pelo menos um dos pais ou responsável legal
            </li>
            <li>
              Coletamos apenas os dados estritamente necessários para a
              prestação do serviço educacional
            </li>
            <li>
              Nunca compartilhamos dados de crianças com terceiros para fins
              comerciais
            </li>
          </ul>

          <h2>6. Compartilhamento de dados</h2>
          <p>
            Não vendemos, alugamos ou compartilhamos seus dados pessoais com
            terceiros, exceto quando necessário para:
          </p>
          <ul>
            <li>Cumprir obrigação legal ou regulatória</li>
            <li>
              Proteger nossos direitos legais em caso de disputas judiciais
            </li>
            <li>
              Prestadores de serviço essenciais (como hospedagem do site), que
              seguem padrões adequados de proteção de dados
            </li>
          </ul>

          <h2>7. Armazenamento e segurança</h2>
          <p>
            Seus dados são armazenados em ambientes seguros, com medidas
            técnicas e organizacionais adequadas para protegê-los contra acesso
            não autorizado, perda ou destruição. Mantemos seus dados apenas
            pelo tempo necessário para as finalidades descritas nesta política.
          </p>

          <h2>8. Seus direitos</h2>
          <p>
            De acordo com a LGPD, você tem direito a:
          </p>
          <ul>
            <li>Saber quais dados seus temos armazenados</li>
            <li>Corrigir dados incompletos ou desatualizados</li>
            <li>Solicitar a exclusão dos seus dados pessoais</li>
            <li>Revogar seu consentimento a qualquer momento</li>
            <li>Solicitar a portabilidade dos seus dados</li>
            <li>
              Obter informações sobre com quem seus dados foram compartilhados
            </li>
          </ul>
          <p>
            Para exercer qualquer um desses direitos, entre em contato conosco
            pelo e-mail{" "}
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-primary hover:underline"
            >
              {CONTACT.email}
            </a>{" "}
            ou pelo WhatsApp{" "}
            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {CONTACT.whatsappDisplay}
            </a>
            .
          </p>

          <h2>9. Cookies</h2>
          <p>
            Este site pode utilizar cookies para melhorar sua experiência de
            navegação. Cookies são pequenos arquivos armazenados no seu
            navegador que nos ajudam a entender como você usa o site. Você pode
            desativar os cookies nas configurações do seu navegador, mas isso
            pode afetar algumas funcionalidades.
          </p>

          <h2>10. Alterações nesta política</h2>
          <p>
            Esta política pode ser atualizada periodicamente. Quando houver
            mudanças relevantes, publicaremos a versão atualizada nesta página
            com a nova data de atualização.
          </p>

          <h2>11. Contato</h2>
          <p>
            Se você tiver dúvidas sobre esta política de privacidade ou sobre
            como tratamos seus dados, entre em contato:
          </p>
          <ul>
            <li>
              <strong>E-mail:</strong>{" "}
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-primary hover:underline"
              >
                {CONTACT.email}
              </a>
            </li>
            <li>
              <strong>WhatsApp:</strong>{" "}
              <a
                href={`https://wa.me/${CONTACT.whatsapp}`}
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {CONTACT.whatsappDisplay}
              </a>
            </li>
            <li>
              <strong>Endereço:</strong> {CONTACT.address}
            </li>
          </ul>
        </article>
      </Container>
    </main>
  );
}
