# Timeline.removeTick

Timeline.removeTick
-


# Timeline.removeTick


## Синтаксис


removeTick(name_index: String | Number);


## Параметры


name_index. Имя или индекс
 удаляемого элемента.


## Описание


Метод removeTick удаляет шаг
 из временной шкалы по имени или индексу.


## Пример


Для выполнения примера необходимо наличие на html-странице ссылок на
 файлы сценария PP.js, PP.GraphicsBase.js и файл стилей PP.css, в теге
 <body> html-страницы элемента <div> с идентификатором «timeline».
 В событии onload тега <body> необходимо указать вызов функции createTimeline().
 Добавим на страницу временную шкалу и реализуем обработчики событий [TicksChanged](Timeline.TicksChanged.htm) и [TicksChanging](Timeline.TicksChanging.htm):


var timeline;
function createTimeline() {
    // Создаем временную шкалу
    timeline = new PP.Ui.Timeline({
        // Устанавливаем родительский элемент
        ParentNode: "timeline",
        // Устанавливаем размеры
        Width: 250,
        // Устанавливаем обработчики событий изменения шагов временной шкалы
        TicksChanged: function (sender, args) {
            if (args.AddedTick) {
                console.log("Добавлен элемент " + args.AddedTick + " в позицию: " + args.AddedIndex);
            } else if (args.RemovedTick) {
                console.log("Удален элемент " + args.RemovedTick + " из позиции: " + args.RemovedIndex);
            }
        },
        TicksChanging: function (sender, args) {
            if (args.AddedTick) {
                console.log("Добавляется элемент " + args.AddedTick + " в позицию: " + args.AddedIndex);
            } else if (args.RemovedTick) {
                console.log("Удаляется элемент " + args.RemovedTick + " из позиции: " + args.RemovedIndex);
            }
        },
    });// Добавляем несколько шагов во временную шкалу
    timeline.beginUpdate();
    for (var i = 0; i < 4; i++) {
        timeline.addTick(""+(2010+i), i);
    }
    timeline.endUpdate();
}
В результате на HTML-странице будет размещена временная шкала с 4 шагами:


![](Timeline_addTick.png)


В консоль будет выведена информация об изменении шагов временной шкалы:


Добавляется элемент 2010 в позицию: 0


Добавлен элемент 2010 в позицию: 0


Добавляется элемент 2011 в позицию: 1


Добавлен элемент 2011 в позицию: 1


Добавляется элемент 2012 в позицию: 2


Добавлен элемент 2012 в позицию: 2


Добавляется элемент 2013 в позицию: 3


Добавлен элемент 2013 в позицию: 3


Инвертируем временную шкалу:


// Инвертируем временную шкалу
timeline.setInverse(true);
В результате шаги временной шкалы будут расположены в обратную сторону:


![](Timeline_Inverse.png)


Удаляем первый шаг временной шкалы:


// Удаляем первый шаг из временной шкалы
timeline.removeTick(0);
В результате будет удален первый шаг временной шкалы:


![](Timeline_removeTick.png)


В консоль будет выведена информация об изменении шагов временной шкалы:


Удаляется элемент 2010 из позиции: 0


Удален элемент 2010 из позиции: 0


См. также:


[Timeline](Timeline.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
