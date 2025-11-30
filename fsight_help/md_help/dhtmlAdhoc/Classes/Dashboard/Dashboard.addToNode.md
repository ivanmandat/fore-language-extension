# Dashboard.addToNode

Dashboard.addToNode
-


# Dashboard.addToNode


## Синтаксис


addToNode(elementId);


## Параметры


elementId. Идентификатор DOM-вершины,
 в которой будет размещена аналитическая панель.


## Описание


Метод addToNode размещает аналитическую
 панель в указанную DOM-вершину.


## Пример


Для выполнения примера предполагается наличие на html- странице экземпляра
 класса Kap.Dashboard с наименованием «dashBoard» (см. Конструкор Dashboard).
 В репозитории должна содержаться аналитическая панель с ключом 826309.


В теге BODY добавьте кнопку для размещения второй панели и контейнер,
 в котором будет размещаться вторая панель:


    <div id="container" style="width: 100%; height: 50%;">
        <!--контейнер для первой аналитической панели-->
        <div id="DashboardBox" style="position:absolute;top:0;bottom:50%;left:0;right:100px;"> </div>
        <div style="position:absolute;top:0;bottom:50%;right:0;width:100px;">
         <!--кнопка для открытия второй панели-->
            <button id="addToNodeBut">Открыть вторую панель</button>
         </div>
        <!--контейнер для второй аналитической панели-->
        <div id="DashboardBox1" style="position:absolute;top:50%;bottom:0;left:0;right:100px;"> </div>
    </div>

В теле функции «onModuleInit» добавьте обработчик события нажатия на
 кнопку с идентификатором «addToNodeBut»:


            document.getElementById("addToNodeBut").onclick = function () {
                var dashBoard2 = new Kap.Dashboard({ Key: "826309" });
                dashBoard2.addToNode("DashboardBox1");
            };

После выполнения примера на странице будет размещена кнопка «Открыть
 вторую панель», при нажатии на которую в DOM-вершину с идентификатором
 «DashboardBox1» будет добавлена аналитическая панель, например:


![](Dashboard.addToNode.gif)


См. также:


[Dashboard](Dashboard.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
