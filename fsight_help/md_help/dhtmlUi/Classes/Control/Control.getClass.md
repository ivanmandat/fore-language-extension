# Control.getClass

Control.getClass
-


# Control.getClass


## Синтаксис


getClass(value);


## Параметры


value. Элемент
 разметки, css-классы которого нужно вернуть.


## Описание


Метод getClass возвращает текущие
 css-классы компонента.


## Пример


Для выполнения примера подключите ссылки на библиотеку PP.js и таблицы
 визуальных стилей PP.css. Создадим кнопку - экземпляр класса [Button](../Button/Button.htm)
 и с помощью метода getClass получим
 информацию о текущих css-классах компонента:


<script type="text/javascript">

    var b1 = new PP.Ui.RibbonButton({

        Content: "Кнопка"});

    b1.addToNode("btn1");

    console.log(b2.getClass("btn1"))

</script>


После выполнения примера на html-страницу будет добавлена кнопка. В
 окне консоли появится информация о текущих css-классах этой кнопки:


Released


См. также:


[Control](Control.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
