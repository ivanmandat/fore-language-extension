# TabSheetSettings.SelectionBorderColor

TabSheetSettings.SelectionBorderColor
-


# TabSheetSettings.SelectionBorderColor


## Синтаксис


SelectionBorderColor: String;


## Описание


Свойство SelectionBorderColor
 определяет цвет границы выделенных ячеек таблицы.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setSelectionBorderColor,
 а возвращается с помощью метода getSelectionBorderColor.


Строка со значением цвета границы выделенных ячеек таблицы задается
 в шестнадцатиричном формате HEX, например: #15F08B.


Для определения цвета заливки выделенных ячеек таблицы используйте свойство
 [TabSheetSettings.SelectionColor](TabSheetSettings.SelectionColor.htm).


По умолчанию параметры оформления выделенных ячеек таблицы заданы в
 [настройках
 репозитория](UiNav.chm::/02_Navigator/Repo_Default.htm)
 на вкладке «[Оформление в отчетах](UiNav.chm::/02_Navigator/Repo_Default.htm#design)».


Примечание.
 Цвет границы, заданный с помощью свойства SelectionBorderColor
 или метода setSelectionBorderColor,
 применяется только при использовании параметров оформления выделенных
 ячеек таблицы по умолчанию. Для сброса пользовательских настроек и возврата
 к параметрам оформления выделенных ячеек таблицы по умолчанию нажмите
 кнопку «Сбросить настройки».


## Пример


Использование метода setSelectionBorderColor
 приведено в примере для [TabSheetSettings.SelectionColor](TabSheetSettings.SelectionColor.htm).


См. также:


[TabSheetSettings](TabSheetSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
