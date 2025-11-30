# TabSheetSettings.SelectionColor

TabSheetSettings.SelectionColor
-


# TabSheetSettings.SelectionColor


## Синтаксис


SelectionColor: String;


## Описание


Свойство SelectionColor определяет
 цвет заливки выделенных ячеек таблицы.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setSelectionColor,
 а возвращается с помощью метода getSelectionColor.


Строка со значением цвета заливки выделенных ячеек таблицы задается
 в шестнадцатиричном формате HEX, например: #15F08B.


Для определения цвета границы выделенных ячеек таблицы используйте свойство
 [TabSheetSettings.SelectionBorderColor](TabSheetSettings.SelectionBorderColor.htm).


Для определения степени прозрачности цвета заливки выделенных ячеек
 таблицы используйте методы [TabSheet.setSelectionTransparent](../../Classes/TabSheet/TabSheet/TabSheet.setSelectionTransparent.htm),
 [TabSheet.getSelectionTransparent](../../Classes/TabSheet/TabSheet/TabSheet.getSelectionTransparent.htm).


По умолчанию параметры оформления выделенных ячеек таблицы заданы в
 [настройках
 репозитория](UiNav.chm::/02_Navigator/Repo_Default.htm)
 на вкладке «[Оформление в отчетах](UiNav.chm::/02_Navigator/Repo_Default.htm#design)».


Примечание.
 Цвет заливки, заданный с помощью свойства SelectionColor
 или метода setSelectionColor,
 применяется только при использовании параметров оформления выделенных
 ячеек таблицы по умолчанию. Для сброса пользовательских настроек и возврата
 к параметрам оформления выделенных ячеек таблицы по умолчанию нажмите
 кнопку «Сбросить настройки».


## Пример


Для выполнения примера предполагается наличие на html-странице компонента
 [GridBox](dhtmlReport.chm::/Components/RegularReport/GridBox/GridBox.htm) с наименованием
 «grid» (см. «[Пример
 размещения компонента GridBox](dhtmlReport.chm::/Components/RegularReport/GridBox/GridBox_example.htm)»). Также в репозитории
 должен содержаться [регламентный
 отчёт](UIReport.chm::/UiReport_purpose.htm) с ключом «11775».


Добавьте в функцию с наименованием «viewGrid» описание события [GridView.Rendered](dhtmlMetabase.chm::/Classes/Metabase/GridView/GridView.Rendered.htm):


// Реализуем событие после первой отрисовки таблицы
grid.Rendered.add(function (sender, args) {
    // Получим таблицу
    tabSheet = grid.getTabSheet();
    // Зададим цвет заливки выделенных ячеек таблицы
    tabSheet.setSelectionColor("#c146e9");
    // Зададим цвет границы выделенных ячеек таблицы
    tabSheet.setSelectionBorderColor("#15f08b");
    // Выведем в консоль текущее значение степени прозрачности цвета заливки выделенных ячеек таблицы
    transparent = tabSheet.getSelectionTransparent();
    console.log("Степень прозрачности цвета: " + transparent);
    // Изменим степень прозрачности цвета заливки выделенных ячеек таблицы
    tabSheet.setSelectionTransparent(0.7);
}, this);

После выполнения примера будет изменено оформление выделенных ячеек
 таблицы: цвет заливки, цвет границы, степень прозрачности цвета заливки.
 В консоль будет выведено значение степени прозрачности цвета выделенных
 ячеек таблицы до её изменения.


См. также:


[TabSheetSettings](TabSheetSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
