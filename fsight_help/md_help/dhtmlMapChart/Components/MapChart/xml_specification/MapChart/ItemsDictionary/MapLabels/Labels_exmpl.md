# Пример настройки списка меток

Пример настройки списка меток
-


# Пример настройки списка меток


На странице приведен пример настройки списка меток в формате [JSON](../../../../xml_and_json.htm).


Примечание. При автоматической конвертации из формата XML в JSON перед атрибутами появляется знак «@», который можно не удалять.


"ItemsDictionary" :


{


//Данному элементу должен предшествовать [список шрифтов](../Fonts/Font_exmpl.htm).


  "MapLabel" :


   [


     {


       "Background" : "{GrayBrush}",//из [списка кистей](../Brushes/Brushes_exmpl.htm)


       "Width" : "100",


       "MaskText" : "Country {0}",


       "Top" : "10",


       "Text" : "DefaultCountry",


       "BorderRadius" : "0",


       "Padding" : "2 2 2 2",


       "Font" : "{BlackFont}",//из [списка шрифтов](../Fonts/Fonts.htm)


       "Height" : "400",


       "BorderThickness" : "1",


       "Left" : "5",


       "Id" : "CountriesLabel",


       "BorderColor" : "White",


       "TextWrapping" : "NoWrap",


       "Margin" : "2 2 2 2"


     },


     {


        "@Background": "{GrayBrush}",


        "@Width": "100",


        "@MaskText": "Region {0}",


        "@Top": "10",


        "@Text": "DefaultRegion",


        "@BorderRadius": "0",


        "@Padding": "2 2 2 2",


        "@Font": "{BlackFont}",


        "@Visibility": "Visible",


        "@Height": "400",


        "@BorderThickness": "1",


        "@Left": "5",


        "@BorderColor": "White",


        "@TextWrapping": "NoWrap",


        "@Margin": "2 2 2 2",


        "@Id": "RegionsLabel"


      }


   ]


//Далее, как правило, следует описание [подсказки](../MapToolTops/ToolTip_exmpl.htm)


}


См. также:


[Элемент MapLabels](MapLabel_element.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
