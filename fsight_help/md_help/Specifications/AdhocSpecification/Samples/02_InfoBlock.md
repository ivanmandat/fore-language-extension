# Информационный блок

Информационный блок
-


# Информационный блок


В примере приведено XML-описание информационного блока «Диаграмма»
 типа Chart.


Блок настроен на источник данных, являющийся объектом репозитория с
 ключом 52505. Блок следит за изменением отметки в блоке с идентификатором
 X3Q6TRVOX9K9DUIA.


<!-- Фрагмент кода пропущен -->

<block name="Диаграмма"
 type="Chart" key="Q1D2KY59CHHHKVXH">

  <prop tag="name" val="Диаграмма"
 />

  <prop tag="background">

    <prop
 tag="useBackground" val="1"
 />

    <prop
 tag="backgroundColor" val="#ffffff"
 />


    <prop tag="useGradient"
 val="0" />

    <prop
 tag="gradientColor" val="#C9C9C9"
 />

    <prop
 tag="gradientAngle" val="270"
 />

  </prop>

<!-- Задаём источник данных
 -->


  <prop tag="dataSource">

    <prop
 tag="objectKey" val="52505"
 />

  </prop>

<!-- Задаём расположение блока
 в контейнере -->

  <prop tag="layout">

    <prop
 tag="left" val="40"
 />

    <prop
 tag="top" val="136"
 />

    <prop
 tag="width" val="500"
 />

    <prop
 tag="height" val="400"
 />


    <prop tag="anchorTop"
 val="1" />

    <prop
 tag="anchorBottom" val="0"
 />

    <prop
 tag="anchorLeft" val="1"
 />

    <prop
 tag="anchorRight" val="0"
 />

  </prop>


<!-- Задаём оформление блока -->

  <prop tag="decor">

    <prop
 tag="cornerRadius" val="5"
 />

    <prop
 tag="useBorderRadius" val="0"
 />

    <prop
 tag="useBorder" val="1"
 />

    <prop
 tag="borderColor" val="#c9c9c9"
 />

    <prop
 tag="borderWidth" val="1"
 />

    <prop
 tag="useShadow" val="0"
 />

    <prop
 tag="shadowColor" val="#000000"
 />

    <prop
 tag="shadowWidth" val="8"
 />


    <prop tag="shadowOpacity"
 val="10" />

    <prop
 tag="paddings">

      <prop
 tag="usePaddings" val="0"
 />

      <prop
 tag="left" val="10"
 />

      <prop
 tag="right" val="10"
 />

      <prop
 tag="top" val="10"
 />

      <prop
 tag="bottom" val="10"
 />

    </prop>

  </prop>

<!-- Задаём заголовок блока
 -->


  <prop tag="blockTitle">

    <prop
 tag="show" val="0"
 />

    <prop
 tag="font">

      <prop
 tag="isBold" val="1"
 />

      <prop
 tag="isItalic" val="0"
 />

      <prop
 tag="isUnderline" val="0"
 />

    </prop>

  </prop>

  <prop tag="expandable" val="0"
 />


<!-- Задаём параметры шины отметок -->

  <prop tag="selectionBus">

    <prop
 tag="handle" val="1"
 />

    <prop
 tag="useRangeSel" val="1" />

    <prop
 tag="params">

      <item>


        <prop tag="handleBlockKey"
 val="X3Q6TRVOX9K9DUIA" />

      </item>

    </prop>

  </prop>

</block>

<!-- Фрагмент кода пропущен
 -->


См. также:


[Примеры](adhoc_samples.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
