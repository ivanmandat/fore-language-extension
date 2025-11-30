# LinearGradientBrush.applyToCanvas

LinearGradientBrush.applyToCanvas
-


# LinearGradientBrush.applyToCanvas


## Синтаксис


applyToCanvas(ctx: CanvasRenderingContext2D);


## Параметры


ctx. Контекст отрисовки.


## Описание


Метод applyToCanvas применяет
 кисть с линейной градиентной заливкой к указанной канве.


## Пример


Для выполнения примера необходимо наличие на html-странице ссылок на
 файл сценария PP.js и файл стилей PP.css. Создадим канву и применим для
 нее линейную градиентную заливку:


   // Создаём div-элемент
   var container= PP.createElement(document.body);
   // Создаем линейную градиентную заливку
   var gradientSettings = {
       GradientType: 0
   }
   var gradientBrush = new PP.LinearGradientBrush(gradientSettings);
   // Устанавливаем точки перехода градиента
   var stop1 = new PP.GradientStop({
       Color: "#e6e6fa",
       Offset: 0.2
   });
   var stop2 = new PP.GradientStop({
       Color: "#abdaff"
   });
   gradientBrush.setGradientStops([stop1, stop2]);
   // Устанавливаем начальную и конечную относительные точки градиента
   var startPoint = new PP.Point({
       X: 0,
       Y: 0
   });
   var endPoint = new PP.Point({
       X: 3,
       Y: 3
   });
   gradientBrush.setStartPoint(startPoint);
   gradientBrush.setEndPoint(endPoint);
   // Создаем канву
   var settings = {
       Width: 100,
       Height: 100
   }
   var canvas = new PP.Ui.Canvas(settings);
   canvas.setLeft(5);
   canvas.setTop(5);
   // Применяем настройки кисти для канвы
   gradientBrush.applyToCanvas(canvas.getContext());
   canvas.addToNode(container)
   // Отрисовываем круг на канве
   canvas.drawCircle(50, 50, 40, true, true);
   canvas.flush();
В результате для канвы была установлена кисть с линейной градиентной
 заливкой:


См. также:


[LinearGradientBrush](LinearGradientBrush.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
