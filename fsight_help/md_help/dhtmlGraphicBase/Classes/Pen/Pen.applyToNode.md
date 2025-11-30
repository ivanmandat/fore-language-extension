# Pen.applyToNode

Pen.applyToNode
-


# Pen.applyToNode


## Синтаксис


applyToNode(node: HTMLElement, side: String);


## Параметры


node. DOM-элемент, к которому
 применяется граница.


side.
 Расположение границы:


	- Left.
	 Слева;


	- Right.
	 Справа;


	- Top.
	 Сверху;


	- Bottom.
	 Снизу.


## Описание


Метод applyToNode устанавливает
 границу к указанному DOM-элементу.


## Пример


Для выполнения примера:


 1. Создайте html-страницу.


 2. Добавьте в теге
 <head> ссылки на js- и css-файлы:


	- PP.js;


	- PP.GraphicsBase.js;


	- PP.css.


 3. Добавьте в теге
 <script> код для создания квадрата с заданной границей справа:


 <script text="text/javascript">
       function Ready() {
       // Создаём div-элемент
       var divElem = PP.createElement(document.body);
       // Настраиваем стили для данного элемента
       divElem.style.width = divElem.style.height = '300px';
       divElem.style.background = 'lightgray';
       // Задаем настройки границы
       var pen = new PP.Pen({
           Color: '#f00000',
           Opacity: 0.5,
           Style: PP.PenStyle.Dotted,
           Width: 5,
           });
       pen.applyToNode(divElem, "Right");
       };
 </script>
После выполнения примера отобразится квадрат с пунктирной красной границей
 справа:


![](Pen_applyToNode.png)


См. также:


[Pen](Pen.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
