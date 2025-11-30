# MetaHierarchy.Dim

MetaHierarchy.Dim
-


# MetaHierarchy.Dim


## Синтаксис


Dim: Number;


## Описание


Свойство Dim определяет измерение по ключу атрибута.


## Пример


Для выполнения примера необходимо создать сервис для работы с временными рядами с наименованием «hieSrv» (см. «[HieService.getChildEls](../HieService/HieService.getChildEls.htm)»). В обработчике события открытия документа добавить следующий код:


	//Получаем атрибуты
	var attrs = hie.getAttributes();
	//Получаем ключ первого атрибута
	var attrKey = attrs[0].k;
	console.log("Получаем измерение по ключу атрибута");
	var dim = hie.getDim(attrKey);
	console.log(dim);

После выполнения примера в консоль браузера будет выведен json-объект измерения по ключу первого атрибута и соответствующее сообщение.


См. также:


[MetaHierarchy](MetaHierarchy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
