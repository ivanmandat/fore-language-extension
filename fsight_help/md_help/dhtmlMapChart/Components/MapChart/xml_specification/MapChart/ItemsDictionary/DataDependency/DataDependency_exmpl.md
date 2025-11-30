# Пример настройки списка объектов зависимостей

Пример настройки списка объектов зависимостей
-


# Пример настройки списка объектов зависимостей


На странице приведен пример настройки объектов зависимостей в формате [JSON](../../../../xml_and_json.htm).


Примечание. При автоматической конвертации из формата XML в JSON перед атрибутами появляется знак «@», который можно не удалять.


"ItemsDictionary" :


{


//Данному элементу должно предшествовать описание [списка шкал](../MapScale/MapScale_exmpl.htm).


  "DataDependency" :


    [


      {


        "IsDependent": "True",


        "TypeArguments": "Brush",


        "Id": "BarBackDataDependency",


        "DataSource": "{BarBackSource}",


        "MapScale": "{BarVisualScale_color}"//шкала из [списка шкал](../MapScale/MapScale_element.htm)


      },


      {


        "IsDependent": "False",


        "TypeArguments": "Double",


        "Id": "StaticWidthDataDependency",


        "Value": "4"


      },


      {


        "IsDependent": "True",


        "MapScale": "{BarVisualScale}",//шкала из [списка шкал](../MapScale/MapScale_element.htm)


        "TypeArguments": "Double",


        "DataSource": "{source}",


        "Id": "BarHeightDataDependency",


        "Value": "80",


        "ValueFormat": "#,##",


        "ValuesStringDelimiter": "|"


      },


      {


        "IsDependent": "False",


        "TypeArguments": "Color",


        "Id": "StaticColorDataDependency",


        "Value": "#ff000000"


      },


      {


        "IsDependent": "False",


        "TypeArguments": "Double",


        "Id": "StaticRadiusDataDependency",


        "Value": "16"


      }


    ]


//Далее, как правило, следует описание [эффектов](../Effects/Effaects_exmpl.htm)


}


См. также:


[Элемент DataDependency](DataDependency_element.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
