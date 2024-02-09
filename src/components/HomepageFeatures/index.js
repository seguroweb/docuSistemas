import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Eficiencia en Acción',
    Svg: require('@site/static/img/homerun.svg').default,
    description: (
      <>
        Simplifica tus procesos con guías claras y procedimientos detallados. Menos errores, decisiones más rápidas y una operación más eficiente.
      </>
    ),
  },
  {
    title: 'Conocimiento en Marcha',
    Svg: require('@site/static/img/equipo.svg').default,
    description: (
      <>
        Transmite conocimientos fácilmente entre equipos. Una herramienta vital para la capacitación, asegurando continuidad y adaptabilidad en tu empresa.
      </>
    ),
  },
  {
    title: 'Cumplimiento Sin Preocupaciones',
    Svg: require('@site/static/img/ciencia.svg').default,
    description: (
      <>
       Cumple normativas con políticas y procedimientos documentados. Identifica y mitiga riesgos para fortalecer tu empresa y proteger su reputación.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
