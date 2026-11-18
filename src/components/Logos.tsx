import s from "./logos.module.scss";

// Логотипы трёх направлений. Размер задаётся font-size родителя (всё в em), цвет — currentColor + акцент.

// 1 «Сигнал»: «I AM» в рамке-чипе интерфейса + DSGN + мигающий курсор-блок. Бренд = живой интерфейс.
export function LogoSignal({ className = "" }: { className?: string }) {
  return (
    <span className={`${s.signal} ${className}`} aria-label="I AM DSGN">
      <span className={s.signalChip}>I AM</span>
      <b>DSGN</b>
      <i className={s.signalCursor} aria-hidden="true" />
    </span>
  );
}
export function MarkSignal({ className = "" }: { className?: string }) {
  return (
    <span className={`${s.markSignal} ${className}`} aria-hidden="true">
      <b>D</b>
      <i />
    </span>
  );
}

// 2 «Кобальт»: iam/dsgn — путь, как в адресной строке или командной строке. Слэш — фирменный знак.
export function LogoCobalt({ className = "" }: { className?: string }) {
  return (
    <span className={`${s.cobalt} ${className}`} aria-label="I AM DSGN">
      iam<i>/</i>dsgn
    </span>
  );
}
export function MarkCobalt({ className = "" }: { className?: string }) {
  return (
    <span className={`${s.markCobalt} ${className}`} aria-hidden="true">
      <span>i</span>
      <i />
    </span>
  );
}

// 3 «Тумблер»: переключатель во включённом положении — «дизайн включён». Тумблер работает и отдельно, как иконка.
export function LogoToggle({ className = "" }: { className?: string }) {
  return (
    <span className={`${s.toggle} ${className}`} aria-label="I AM DSGN">
      <MarkToggle />
      <span>I AM DSGN</span>
    </span>
  );
}
export function MarkToggle({ className = "" }: { className?: string }) {
  return (
    <span className={`${s.markToggle} ${className}`} aria-hidden="true">
      <i />
    </span>
  );
}

// 4 «Хром»: строчный тонкий шрифт с металлическим переливом + знак-капля хрома
export function LogoChrome({ className = "" }: { className?: string }) {
  return (
    <span className={`${s.chrome} ${className}`} aria-label="I AM DSGN">
      <MarkChrome />
      <span>i am <b>dsgn</b></span>
    </span>
  );
}
export function MarkChrome({ className = "" }: { className?: string }) {
  return <span className={`${s.markChrome} ${className}`} aria-hidden="true" />;
}

// 5 «Конструктор»: дизайн из трёх базовых фигур — столбик (I), треугольник (A), круг (D)
export function LogoShapes({ className = "" }: { className?: string }) {
  return (
    <span className={`${s.shapes} ${className}`} aria-label="I AM DSGN">
      <MarkShapes />
      <span>I AM DSGN</span>
    </span>
  );
}
export function MarkShapes({ className = "" }: { className?: string }) {
  return (
    <span className={`${s.markShapes} ${className}`} aria-hidden="true">
      <i /><i /><i />
    </span>
  );
}
