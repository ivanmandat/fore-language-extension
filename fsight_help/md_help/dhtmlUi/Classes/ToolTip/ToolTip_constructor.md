# Конструктор ToolTip

Конструктор ToolTip
-


# Конструктор ToolTip


## Синтаксис


PP.Ui.ToolTip(settings);


## Параметры


settings. JSON-объект
 со значениями свойств компонента.


## Описание


Конструктор ToolTip создает
 экземпляр класса [ToolTip](ToolTip.htm).


## Пример


Для выполнения примера в теге HEAD html-страницы должны быть подключены
 ссылки на библиотеку компонентов PP.js и таблицы визуальных стилей PP.css.
 Разместим на странице текстовую область, при наведении курсора на которую
 будет всплывать подсказка:


<table style="height: 300px">


   <tr>


     <td style="vertical-align:
 top;">


        <div
 id="example" onmouseout="toolTip.hide();" onclick="toolTip.hide();"
 onmouseover="toolTip.show(10, 35);" style="background-color:
 #CCC0DA; margin-left: 50px; margin-top: 10px; padding: 8px;">Наведите
 курсор мыши на эту область...


         </div>


      </td>


   </tr>


</table>


<script type="text/javascript">


    var toolTip = new PP.Ui.ToolTip({


        Content:
 "Росстат: 245 674,<br/> 89 регионов",


        Width:
 170});


</script>


После выполнения примера на html-странице будет размещена текстовая
 область, при наведении курсора на которую будет всплывать подсказка:


![](../../Components/ToolTip/ToolTip1.gif)


При нажатии на текстовую область подсказка будет скрыта.


См. также:


[ToolTip](ToolTip.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
