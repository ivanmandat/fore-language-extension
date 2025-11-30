# BorderCombo.BorderTypeChanged

BorderCombo.BorderTypeChanged
-


# BorderCombo.BorderTypeChanged


## Синтаксис


BorderTypeChanged (sender, args);


## Параметры


sender. Источник события;


args. Информация
 о событии.


## Описание


Событие BorderTypeChanged наступает
 при выборе типа размещения границы.


## Пример


Для выполнения примера на html-странице должна размещаться таблица,
 состоящая из двух строк и двух столбцов, и элемент DIV с идентификатором
 «example»:


<div id="example"></div>


<table border="0" cellspacing="0"
 id="patient" style="border-color: '#000000'; text-align:
 center;


border-collapse: collapse">


  <tr>


    <td style="width:
 100px; height: 50px;">


       C1|R1


    </td>


    <td style="width:
 100px; height: 50px;">


       C2|R1


    </td>


  </tr>


  <tr>


    <td style="width:
 100px; height: 50px;">


       C1|R2


    </td>


    <td style="width:
 100px; height: 50px;">


       C2|R2


    </td>


  </tr>


</table>


Далее приведен javascript-код для создания компонента [BorderCombo](../../Components/BorderCombo/BorderCombo.htm)
 и его использования для настройки границ таблицы:


    <script type="text/javascript">


        //создаем компонент BorderCombo


        var
 bc = new PP.Ui.BorderCombo({ ParentNode: "example", LineType:
 0, BorderType: 0 });


        //доступна панель для настройки расположения
 линий границы


        bc.setBorderTypeOnlt(true);


         //тип линии


         var
 borderType = bc.getLineType();


        //сплошная линия


            if
 (borderType === 0)


            borderType
 = "solid";


        //пунктирная линия


            if
 (borderType === 1)


            borderType
 = "dotted";


        //устанавливаем тип линии для границ таблицы


            setLineType(borderType);


            //цвет линии


            var
 borderColor = bc.getColor();


            //устанавливаем цвет линии для границ таблицы


            setColor(borderColor);


            //обработчик события смены расположения линий
 границы


        bc.BorderTypeChanged.add(function
 (sender, args) {


            var
 table = document.getElementById("patient");


            switch
 (sender.getBorderType()) {


                    case
 PP.Ui.BorderCombo.BorderType.BottomSingle:


                    //отображается нижнюю границу таблицы


                        setBottom("1px");


                    break;


                case
 PP.Ui.BorderCombo.BorderType.TopSingle:


                    //отображается верхнюю границу таблицы


                        setTop("1px");


                    break;


                default:


                    //линии границы не отображаются


                        resetLineWidths();


                    break;


            }


        });


        //определяем расположение линий границ


            bc.setBorderType(bc.getBorderType());


        //обработчик события смены типа линий


        bc.LineTypeChanged.add(function
 (sender, args) {


            switch
 (sender.getLineType()) {


                case
 PP.Ui.BorderCombo.LineType.Solid:


                    setLineType("solid");


                    break;


                case
 PP.Ui.BorderCombo.LineType.Dots:


                    setLineType("dotted");


                    break;


               }


        });


        //обработчик события смены цвета линии


        bc.ColorChanged.add(function
 (sender, args) {


            setColor(sender.getColor());


        });


        //функция для установки типа линии таблицы


        function
 setLineType(type) {


            var
 table = document.getElementById("patient");


            for
 (var x = 0; x < table.rows.length; x++) {


                for
 (var y = 0; y < table.rows[x].cells.length; y++) {


                    table.rows[x].cells[y].style.borderStyle
 = type;


                }


            }


        }


        //функция для установки цвета границы таблицы


        function
 setColor(color) {


            var
 table = document.getElementById("patient");


            for
 (var x = 0; x < table.rows.length; x++) {


                for
 (var y = 0; y < table.rows[x].cells.length; y++) {


                    table.rows[x].cells[y].style.borderColor
 = color;


                }


            }


        }


        // функция, которая скрывает границы таблицы


        function
 resetLineWidths() {


            var
 table = document.getElementById("patient");


            for
 (var x = 0; x < table.rows.length; x++) {


                for
 (var y = 0; y < table.rows[x].cells.length; y++) {


                    table.rows[x].cells[y].style.borderWidth
 = "0px";


                }


            }


        };


        //функция для отображения нижней границы таблицы


        function
 setBottom(width) {


            resetLineWidths();


            var
 table = document.getElementById("patient");


            table.rows[1].cells[0].style.borderBottomWidth
 = width;


            table.rows[1].cells[1].style.borderBottomWidth
 = width;


        };


        //функция для отображения нижней границы таблицы


        function
 setTop(width) {


            resetLineWidths();


            var
 table = document.getElementById("patient");


            table.rows[0].cells[0].style.borderTopWidth
 = width;


            table.rows[0].cells[1].style.borderTopWidth
 = width;


        };


</script>


После выполнения примера на html-странице будет размещен компонент [BorderCombo](../../Components/BorderCombo/BorderCombo.htm)
 и таблица, состоящая из 2 строк и 2 столбцов. Для свойства [BorderTypeOnlt](BorderCombo.BorderTypeOnlt.htm)
 установлено значение true, поэтому
 в компоненте отображается панель для выбора типа расположения линий. Выбран
 первый тип расположения линий - граница снизу. Цвет линии по умолчанию
 - черный. Тип линии - сплошная:


![](../../Components/BorderCombo/BorderCombo4.gif)


При выборе цвета из раскрывающегося списка изменится цвет линии границы
 таблицы:


![](../../Components/BorderCombo/BorderCombo5.gif)


Из созданного компонента [BorderCombo](../../Components/BorderCombo/BorderCombo.htm)
 можно установить 2 типа линии границы таблицы: сплошную и пунктирную:


![](../../Components/BorderCombo/BorderCombo3.gif)


Доступны следующие типы расположения границ таблицы: граница сверху,
 граница снизу, граница отсутствует:


![](../../Components/BorderCombo/BorderCombo6.gif)


Изменение цвета и типа линий и расположение границ можно производить
 как при помощи свойств [BorderType](BorderCombo.BorderType.htm),
 [Color](BorderCombo.Color.htm) и [LineType](BorderCombo.LineType.htm),
 так и при выборе соответствующих пиктограмм в компоненте [BorderCombo](../../Components/BorderCombo/BorderCombo.htm).


 См. также:


[BorderCombo](BorderCombo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
