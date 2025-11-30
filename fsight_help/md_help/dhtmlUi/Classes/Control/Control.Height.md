# Control.Height

Control.Height
-


# Control.Height


## Синтаксис


Height: Number;


## Описание


Свойство Height определяет высоту
 компонента.


## Комментарии


Значение свойства устанавливается из JSON или при помощи метода setHeight, а возвращается  -
 при помощи метода getHeight.


## Пример


Для выполнения примера к HTML-странице необходимо подключить библиотеку
 PP.js и таблицы визуальных стилей PP.css. Далее представлен javascript-код,
 с помощью которого создается [кнопка](../../Components/Button/Button.htm)
 с заданными размерами.


<script type="text/javascript">
var b1 = new PP.Ui.Button({
      ParentNode: document.getElementById("b1"),
      Content: "Выбрать",
      Width: 100,
      Height: 100});
</script>

После выполнения примера на HTML-странице будет создана кнопка с надписью
 «Выбрать» размером 100х100 пикселей.


См. также:


[Control](Control.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
