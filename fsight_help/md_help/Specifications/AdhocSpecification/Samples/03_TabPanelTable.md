# Закладки. Панель. Таблица

Закладки. Панель. Таблица
-


# Закладки. Панель. Таблица


В примере приведено XML-описание блока «[Закладки](../Props/block_tabpanel.htm)», состоящего
 из двух вкладок Tab1 и Tab2. Каждой вкладке соответствует
 блок типа «[Панель](../Props/adhocspec_panel.htm)»,
 содержимое которого выводится при выборе соответствующей вкладки.


В панели на вкладке Tab1 расположены
 две таблицы, настроенные на источники данных с ключами 351559 и 351560.
 Панель вкладки Tab2 пустая.


Описание однотипных структурных свойств [background](../Props/AdhocSpec_block.htm#background),
 [layout](../Props/AdhocSpec_block.htm#layout)
 и [decor](../Props/AdhocSpec_block.htm#decor)
 опущено.


<!-- Фрагмент кода пропущен -->

<block name="Tabs"
 type="TabPanel" key="DLML4TVZVAJWRBKS">

  <prop tag="name" val="Tabs"></prop>

  <prop tag="background"><!--
 Фрагмент кода пропущен --></prop>

  <prop tag="layout"><!--
 Фрагмент кода пропущен --></prop>

  <prop tag="decor"><!--
 Фрагмент кода пропущен --></prop>

  <prop tag="expandable" val="0"></prop>

  <prop tag="tabitems">

  <!-- Вкладка
 Tab1 -->


    <item>

      <prop
 tag="caption" val="Tab1"></prop>

      <block
 type="Panel" key="ANLC0HSDNQWICEQM">

        <prop
 tag="background"><!--
 Фрагмент кода пропущен --></prop>

        <prop
 tag="decor"><!--
 Фрагмент кода пропущен --></prop>

        <prop
 tag="layouts">

          <area key="VNYZFNKRLF7KH428">


            <block name="Table"
 type="Table" key="VNYZFNKRLF7KH428">

              <prop tag="name"
 val="Table"></prop>

              <prop tag="background">...</prop>

              <prop tag="dataSource">

                <prop tag="objectkey" val="351559"></prop>

              </prop>


              <prop tag="layout"><!-- Фрагмент
 кода пропущен --></prop>

              <prop tag="decor"><!-- Фрагмент
 кода пропущен --></prop>

              <prop tag="expandable"
 val="0"></prop>

              <prop tag="selectionBus">

                <prop tag="handle"
 val="1"></prop>

              </prop>

            </block>

          </area>


          <area key="XVIRSVPBDONSUQ4Q">

            <block name="Table"
 type="Table" key="XVIRSVPBDONSUQ4Q">

              <prop tag="name"
 val="Table"></prop>

              <prop tag="background"><!-- Фрагмент
 кода пропущен --></prop>

              <prop tag="dataSource">

                <prop tag="objectkey" val="351560"></prop>

              </prop>


              <prop tag="layout"><!-- Фрагмент
 кода пропущен --></prop>

              <prop tag="decor"><!-- Фрагмент
 кода пропущен --></prop>

              <prop tag="expandable"
 val="0"></prop>

              <prop tag="selectionBus">

                <prop tag="handle"
 val="1"></prop>

              </prop>

            </block>

          </area>

        </prop>

      </block>


    </item>

  <!-- Вкладка
 Tab2 -->

    <item>

      <prop
 tag="caption" val="Tab2"></prop>

      <block
 type="Panel" key="TA9WSMSY0AWXJJ0T">

        <prop
 tag="background"><!--
 Фрагмент кода пропущен --></prop>

        <prop
 tag="decor"><!--
 Фрагмент кода пропущен --></prop>

      </block>

    </item>


  </prop>

  <prop tag="selectedIndex"
 val="0"></prop>

  <prop tag="dragdrop"
 val="0"></prop>

</block>

<!-- Фрагмент кода пропущен
 -->


См. также:


[Примеры](adhoc_samples.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
