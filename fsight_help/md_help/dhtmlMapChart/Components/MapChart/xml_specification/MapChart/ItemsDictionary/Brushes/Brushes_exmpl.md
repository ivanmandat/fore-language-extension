# Пример настройки списка кистей

Пример настройки списка кистей
-


# Пример настройки списка кистей


На странице приведен пример настройки списка кистей в формате [JSON](../../../../xml_and_json.htm).


Примечание. При автоматической конвертации из формата XML в JSON перед атрибутами появляется знак «@», который можно не удалять.


"[ItemsDictionary](../ItemsDictionary.htm)" :


{


//Как правило, список кистей располагается в начале списка элементов.


//Простые кисти:


   "SolidColorBrush" :


   [


     {"Id" : "GrayBrush", "Color" : "Gray"},


     {"Id" : "ColorBrush","Color" : "Cyan"},


     {"Id" : "solid1","Color" : "#ffCBE5F2"},


     {"Id" : "solid2","Color" : "#ffA6C4D7"},


     {"Id" : "solid3","Color" : "#ff82A4BC"},


     {"Id" : "solid4","Color" : "#ff6085A3"},


     {"Id" : "solid5","Color" : "#ff345D83"},


     {"Id" : "solid6","Color" : "#ffC3C3C3"}


   ],


//Кисть линейного градиента


   "LinearGradientBrush" :


     { "EndPoint" : "1, 1",


       "StartPoint" : "0, 0",


       "Id" : "LinearGradient",


       "LinearGradientBrush.GradientStops" :


         {


           "GradientStop" :


             [


                {"Offset" : "0","Color" : "#ffdd00cc"},


                {"Offset" : "1","Color" : "#ffaaffcc"}


             ]


         }


     },


//Кисть радиального градиента


   "RadialGradientBrush" :


     {


        "@Center" : "0.5, 0.5",


        "@Id" : "RadialGradient",


        "RadialGradientBrush.GradientStops" :


           {


             "GradientStop" :


              [


                 {"@Offset" : "0", "@Color" : "#ff000000"},


                 {"@Offset" : "1", "@Color" : "#ffffffdd"}


              ]


            }


      }


//Далее, как правило, располагается [список шрифтов](../Fonts/Font_exmpl.htm).


}


См. также:


[Кисти](Brushes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
