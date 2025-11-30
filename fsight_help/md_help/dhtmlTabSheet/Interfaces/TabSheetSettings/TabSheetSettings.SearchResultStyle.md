# TabSheetSettings.SearchResultStyle

TabSheetSettings.SearchResultStyle
-


# TabSheetSettings.SearchResultStyle


## Синтаксис


SearchResultStyle: Object;


## Описание


Свойство SearchResultStyle определяет
 стиль ячеек из результатов поиска.


## Комментарии


Значение свойства устанавливается с помощью метода setSearchResultStyle(style)
 и возвращается с помощью метода getSearchResultStyle.
 Из JSON значение свойства задать нельзя.


Параметры:


	- *style*. Object. Стиль ячейки.


Объект стиля ячейки имеет следующую структуру:


{
Fill: {
  "@C": "red"  // заливка ячейки
},
Font: {
  "@F": "Arial",  //стиль шрифта
  "@S": 20,  //размер шрифта
  "@C": "white",  //цвет шрифта
  "@I": true,  //курсив
  "@SO": true,  //зачеркнутый
  "@B": true,  //жирный
  "@U": true  //подчеркнутый
}};

## Пример


Пример использования приведен на странице метода [TabSheet.addCellToSearchResult](../../Classes/TabSheet/TabSheet/TabSheet.addCellToSearchResult.htm).


См. также:


[TabSheetSettings](TabSheetSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
