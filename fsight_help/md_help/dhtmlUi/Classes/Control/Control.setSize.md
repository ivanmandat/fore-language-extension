# Control.setSize

Control.setSize
-


# Control.setSize


## Синтаксис


setSize(Width, Height);


## Параметры


Width. Ширина
 компонента в пикселях;


Height. Высота компонента в
 пикселях.


## Описание


Метод setSize устанавливает
 размеры компонента.


## Пример


Для выполнения примера необходимо подключить к html-странице библиотеку
 PP.js и таблицы визуальных стилей PP.css.


Создадим две кнопки: экземпляр класса [Button](../Button/Button.htm)
 c наименованием «MyButton» и html-кнопку с наименованием «Изменить размер»,
 при нажатии на которую будут изменены размеры первой кнопки.


<div id = "btn1"></div>

<br/>

<button onclick = "b1.setSize(50,100);">Изменить размер</button>//создаем кнопку, которая вызывает //метод
 setSize()

<script type="text/javascript">

     var b1 = new PP.Ui.Button({

         ParentNode: document.getElementById("btn1"),

         Content: "MyButton"})

</script>


После выполнения примера при нажатии на кнопку «Изменить размер» кнопка
 «MyButton» приобретет размер 50х100 пикселей.


См. также:


[Control](Control.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
