# MapContentMilestone.clear

MapContentMilestone.clear
-


# MapContentMilestone.clear


## Синтаксис


clear();


## Описание


Метод clear удаляет события DOM-элемента, соответствующего значку слоя карты.


## Пример


Для выполнения примера необходимо наличие на html-странице объекта класса [MapContentMilestone](MapContentMilestone.htm) с наименованием «milestone» (см. страницу описания метода [MapContentMilestone.getMilestonePosition](MapContentMilestone.getMilestonePosition.htm)). Подпишемся на все события DOM-элемента, соответствующего значку слоя карты, и обработаем событие MouseDown, выводя в консоли браузера содержимое текстовой области значка:


// Подпишемся на все события dom-элемента значка
milestone._bindEvents();
// Обработаем событие MouseDown
milestone.MouseDown.add(function (sender, args) {
    console.log("Содержимое текстовой области: " + sender.getContent().getContent());
});

В результате выполнения примера при нажатии на текстовую область значка слоя карты в консоли браузера будет выводиться содержимое данной области:


Содержимое текстовой области: RU-KYA


Теперь удалим все события DOM-элемента, соответствующего значку слоя карты:


milestone.clear();

После выполнения данной строки сценария при нажатии на текстовую область значка в консоли браузера ничего выводиться не будет.


См. также:


[MapContentMilestone](MapContentMilestone.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
