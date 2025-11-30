# Пример настройки списка шрифтов

Пример настройки списка шрифтов
-


# Пример настройки списка шрифтов


На странице приведен пример настройки списка шрифтов в формате [JSON](../../../../xml_and_json.htm).


Примечание. При автоматической конвертации из формата XML в JSON перед атрибутами появляется знак «@», который можно не удалять.


"ItemsDictionary" :


{


//Данному элементу должен предшествовать [список кистей](../Brushes/Brushes.htm).


   "Font" :


  [


     {


        "IsItalic" : "False",


        "FontFamily" : "Verdana",


        "Size" : "11",


        "Id" : "BlackFont",


        "IsBold" : "False",


        "Color" : "Black"


     },


     {


       "IsItalic" : "False",


       "FontFamily" : "Calibri",


       "Size" : "10",


       "Id" : "WhiteFont",


       "IsBold" : "True",


       "Color" : "White"


     },


     {


       "IsItalic" : "False",


       "FontFamily" : "Verdana",


       "Size" : "15",


       "Id" : "ColoredFont",


       "IsBold" : "False",


       "Color" : "#ff000aee"


      },


     {


       "IsItalic" : "False",


       "FontFamily" : "Calibri",


       "Size" : "12",


       "Id" : "ToolTipFont",


       "IsBold" : "False",


       "Color" : "Black"


      }


  ]


//Далее, как правило, следует [список меток](../MapLabels/Labels_exmpl.htm).


}


См. также:


[Элемент Font](Fonts.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
