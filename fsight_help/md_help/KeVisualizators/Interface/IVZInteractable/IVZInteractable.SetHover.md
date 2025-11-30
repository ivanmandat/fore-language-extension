# IVZInteractable.SetHover

IVZInteractable.SetHover
-


# IVZInteractable.SetHover


## Синтаксис


SetHover(hoverItemId: String; doNotify: Boolean);


## Параметры


hoverItemId. Идентификатор
 элемента, для которого требуется установить подсветку;


doNotify. Признак срабатывания
 события IVZInteractableEvents.OnChangedHover,
 наступающего при изменении подсветки элемента.


## Описание


Метод SetHover устанавливает
 подсветку элемента.


## Комментарии


Допустимые значения параметра doNotify:


	- True. Событие IVZInteractableEvents.OnChangedHover
	 срабатывает;


	- False. Событие IVZInteractableEvents.OnChangedHover
	 не срабатывает.


См. также:


[IVZInteractable](IVZInteractable.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
