# DropPanel.SizeChanging

DropPanel.SizeChanging
-


# DropPanel.SizeChanging


## Синтаксис


SizeChanging: function
 (sender, args)


## Параметры


sender. Источник события;


args. Информация
 о событии.


## Описание


Событие SizeChanging наступает
 перед изменением размеров компонента.


## Комментарии


Для наступления события необходимо, чтобы для свойства [DropPanel.EnableResize](DropPanel.EnableResize.htm)
 было установлено значение true.


## Пример


Для выполнения примера создайте компонент [DropPanel](../../Components/DropPanel/DropPanel.htm)
 и кнопку, при нажатии на которую раскрывается панель (см. «[Пример
 создания компонента DropPanel](../../Components/DropPanel/Example_DropPanel.htm)»). Добавим обработчик события SizeChanging:


DP.SizeChanging.add(function (sender, args)


{


    alert("Тек размер:
 высота: " + DP.getHeight() + ", ширина: " + DP.getWidth());


})


После выполнения примера при нажатии на кнопку будет раскрыта панель.
 При изменении размера панели путем перетаскивания ее границ в окне браузера
 будет выведена информация о ширине и высоте компонента, которые были установлены
 до начала изменения размеров.


См. также:


[DropPanel](DropPanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
