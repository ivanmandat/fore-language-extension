# Пример настройки списка шкал

Пример настройки списка шкал
-


# Пример настройки списка шкал


На странице приведен пример настройки шкал карты в формате [JSON](../../../../xml_and_json.htm).


Примечание. При автоматической конвертации из формата XML в JSON перед атрибутами появляется знак «@», который можно не удалять.


"ItemsDictionary" :


{


//Данному элементу должно предшествовать описание [всплывающей подсказки](../MapToolTops/ToolTip_exmpl.htm).


   "MapScale" :


     [


      {


        "Items" : "{solid1 solid2 solid3 solid4 solid5 solid6}",//из [списка кистей](../Brushes/Brushes.htm)


        "Mode" : "Linear",


        "EnableEquality" : "False",


        "TypeArguments" : "Brush",


        "Id" : "AreaVisualScale"


       },


      {


        "Items": "Red Green Blue Yellow Transparent",


        "TypeArguments": "Color",


        "Id": "BarVisualScale_color",


        "NoData" : "Gray",


        "EnableEquality" : "False",


        "Values": "1 2 3 4"


      },


      {


        "Items": "4 10 12 15 18 20 22 25 28 30 35 40 43 50",


        "NoData": "0.0",


        "TypeArguments": "Double",


        "Id": "BarVisualScale",


        "EnableEquality": "false"


       }


     ]


//Далее, как правило, следует описание [объектов зависимости](../DataDependency/DataDependency_exmpl.htm)


}


См. также:


[Элемент MapScale](MapScale_element.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
