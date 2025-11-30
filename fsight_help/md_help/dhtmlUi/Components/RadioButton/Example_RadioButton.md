# Пример создания группы компонентов RadioButton

Пример создания группы компонентов RadioButton
-


# Пример создания группы компонентов RadioButton


Для выполнения примера добавьте ссылки на библиотеку PP.js и таблицы визуальных стилей PP.css. Разместим на странице группу компонентов [RadioButton](RadioButton.htm), состоящую из трех переключателей.


<script type="text/javascript">


   function RadioGroup(group, text, id, state) {//Добавим функцию, содержащую значения свойств компонента RadioButton:


        var radiobutton = new PP.Ui.RadioButton({ ParentNode: document.getElementById("radiobuttons"),


                Checked: state,//Признак наличия отметки


                GroupName: group,//Имя группы


                Content: text,//Текст, который будет расположен рядом с переключателем


                Id: id//Идентификатор переключателя


            });


        }


//Экземпляры компонента RadioButton. В качестве параметров - значения свойств компонента.


    RadioGroup('group1', 'RadioButton1<br/>', "rb1", true);


    RadioGroup('group1', 'RadioButton2<br/>', "rb2", false);


    RadioGroup('group1', 'RadioButton3', "rb3", false);


</script>


После выполнения примера на html-странице будет размещена группа компонентов [RadioButton](RadioButton.htm), состоящая из трех переключателей, первый из которых является отмеченным:


![](RadioButton1.gif)


При выборе другого компонента группы отметка с предыдущего переключателя снимается.


См. также:


[RadioButton](RadioButton.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
