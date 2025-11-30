# Пример создания компонента GridPanel

Пример создания компонента GridPanel
-


# Пример создания компонента GridPanel


Для выполнения примера в теге HEAD html-страницы добавьте ссылки на библиотеку PP.js и таблицы визуальных стилей PP.css. Необходимо наличие тега DIV с идентификатором «gp1». Далее приведены примеры динамического и статического размещения компонента [GridPanel](GridPanel.htm), на котором расположены компоненты [ColorCombo](../ColorCombo/ColorCombo.htm), Label и TextBox.


## Пример статического размещения компонента GridPanel


<script type="text/javascript">


    var container = new PP.Ui.GridPanel({ ParentNode: document.getElementById("gp1") });


    var label1 = new PP.Ui.Label({ Top: 0, Left: 0, Content: "ColorCombo" });


    var colorCombo = new PP.Ui.ColorCombo({ Top: 0, Left: 1 });


    container.add(label1);


    container.add(colorCombo);


    var label2 = new PP.Ui.Label({ Top: 1, Left: 0, Content: "TextBox" });


    var textBox = new PP.Ui.TextBox({ Top: 1, Left: 1, Content: "Росстат", Width: 200 });


    container.add(label2);


    container.add(textBox);


</script>


## Пример динамического размещения компонента GridPanel


<script type="text/javascript">


    var container = new PP.Ui.GridPanel({


        Items: [new PP.Ui.Label({ Top: 0, Left: 0, Content: "ColorCombo" }),


                new PP.Ui.ColorCombo({ Top: 0, Left: 1 }),


                new PP.Ui.Label({ Top: 1, Left: 0, Content: "TextBox" }),


                new PP.Ui.TextBox({ Top: 1, Left: 1, Content: "Росстат", Width: 200 })],


        ParentNode: document.getElementById("gp1")


    });


</script>


После выполнения примера на html-странице будет размещен компонент GridPanel, имеющий следующий вид:


![](gridpanel2.gif)


См. также:


[GridPanel](GridPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
