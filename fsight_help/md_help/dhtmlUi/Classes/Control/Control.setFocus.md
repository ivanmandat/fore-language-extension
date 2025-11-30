# Control.setFocus

Control.setFocus
-


# Control.setFocus


## Синтаксис


setFocus();


## Описание


Метод setFocus устанавливает
 фокус компонента.


## Пример


Для выполнения примера добавьте ссылки на библиотеку PP.js и таблицы
 визуальных стилей PP.css. Предполагается наличие изображения с наименованием
 «ImgBtn1.png». Создадим кнопку - экземпляр класса [Button](../Button/Button.htm).
 Для этой кнопки установим фокус:


<div id = "btn1"></div>

<script type="text/javascript">

   var b1 = new PP.Ui.Button({

       Content: "Иллюстрации",

       ImageURL: "ImgBtn1.png"});

   b1.addToNode("btn1");

   b1.setFocus();

</script>


После выполнения примера на HTML-странице будет размещен компонент [Button](../../Components/Button/Button.htm),
 имеющий следующий вид:


![](../../Components/Button/ex6_SetFocus.gif)


См. также:


[Control](Control.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
