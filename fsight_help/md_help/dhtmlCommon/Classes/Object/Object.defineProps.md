# Object.defineProps

Object.defineProps
-


# Object.defineProps


## Синтаксис


defineProps(refClass: Function, names: string[],
 withSetters: boolean);


## Параметры


refClass. Класс, для которого
 создаются методы get/set;


names. Массив имен для создания
 методов get/set;


withSetters. Определяет создание
 методов:


	- True. Метод set доступен
	 для создания;


	- False. Метод get доступен
	 для создания.


## Описание


Метод defineProps создает методы
 get и set из массива имен для указанного класса.


См. также:


[Object](Object.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
