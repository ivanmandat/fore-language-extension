# Пример настройки всплывающей подсказки

Пример настройки всплывающей подсказки
-


# Пример настройки всплывающей подсказки


На странице приведен пример настройки всплывающей подсказки в формате
 [JSON](../../../../xml_and_json.htm).


Примечание.
 При автоматической конвертации из формата XML в JSON перед атрибутами
 появляется знак «@», который можно не удалять.


"ItemsDictionary" :


{


//Данному элементу должен
 предшествовать [список меток](../MapLabels/Labels_exmpl.htm).


"ChartTooltipBase": {


  "@Background": "#ffcccccc",


  "@Text": "DefaultCountry",


  "@BorderRadius": "5",


  "@HoverMode": "MouseOver",


  "@BorderThickness": "1",


  "@Left": "5",


  "@TextWrapping": "Wrap",


  "@Id": "Tooltip1",


  "@MaskText": "{0}",


  "@Top": "10",


  "@Font": "{BlackFont}",


  "@Padding": "2 2 2 2",


  "@Height": "30",


  "@BorderColor": "#E0FFFF",


  "@Margin": "2 2 2 2",


  "DropShadow": "True"


},


//Далее, как правило, следует
 [описание шкал](../MapScale/MapScale_element.htm).


}


См. также:


[Элемент
 ChartTooltipBase](MapToolTip_element.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
