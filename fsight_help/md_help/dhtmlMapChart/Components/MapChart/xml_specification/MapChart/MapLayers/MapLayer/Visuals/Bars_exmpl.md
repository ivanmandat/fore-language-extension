# Пример настройки столбикового показателя

Пример настройки столбикового показателя
-


# Пример настройки столбикового показателя


Для выполнения примера необходимо наличие [xml-файла](../../../../xml-specification.htm) с наименованием «MapXmlExample_RU.xml», топоосновы Russia.svg и [html-страницы](../../../../../HTML_layout.htm), на которой расположена карта. Настройки карты должны быть представлены в формате [JSON](../../../../../xml_and_json.htm).


Примечание. При автоматической конвертации из формата XML в JSON перед атрибутами появляется знак «@», который можно не удалять.


Xml-файл должен содержать следующие элементы:


-
[шкалы](../../../ItemsDictionary/MapScale/MapScale_exmpl.htm) с идентификаторами «BarVisualScale_color» и «BarVisualScale» (в [словаре элементов](../../../ItemsDictionary/ItemsDictionary.htm));


-
[источники данных](../../../DataSources/DataSources_exmpl.htm) с идентификаторами «source» и «BarBackSource» (в [списке источников данных](../../../DataSources/DataSources_element.htm) ), в которых хранятся данные для 4 регионов: Ямало-Ненецкий автономный округ, Ханты-Мансийский автономный округ, Тюменская область, Ненецкий автономный округ;


-
[объекты зависимости](../../../ItemsDictionary/DataDependency/DataDependency_exmpl.htm) с идентификаторами «BarBackDataDependency», «StaticWidthDataDependency», «BarHeightDataDependency» и «StaticColorDataDependency» (в [словаре элементов](../../../ItemsDictionary/ItemsDictionary.htm)).


Для настройки столбикового показателя в элемент "[Visuals](Visuals_element.htm)" добавим элемент"[MapAreaVisual](MapAreaVisual_element.htm)".


Примечание. В случае описания свойств объектов в виде элементов, а не атрибутов, используется синтаксис ИмяОбъекта.ИмяСвойства (например, MapLayer.Visuals).


"MapLayer.Visuals":


{


   "MapBarVisual":


     {


       "Background": "{BarBackDataDependency}",


       "BarDistance": "1",


       "LeastWidthPart": "4",


       "Width": "{StaticWidthDataDependency}",


       "Name": "Рождаемость",


       "MaxBarsCount": "4",


       "Visibility": "Visible",


       "Height": "{BarHeightDataDependency}",


       "LeastHeightPart": "3",


       "BorderThickness": "1",


       "IsPercentage": "False",


       "Id": "BarVisual",


       "BorderColor": "{StaticColorDataDependency}",


       "DataSource": "{source}"


     }


}


После выполнения примера на карте для 4 регионов будет отображен столбиковый показатель:


![](../../../../../chartmap8.gif)


См. также:


[Элемент MapBarVisual](MapBarVisual_element.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
