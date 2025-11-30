# Autocomplete.getTargets

Autocomplete.getTargets
-


# Autocomplete.getTargets


## Синтаксис


getTargets ();


## Описание


Метод getTargets возвращает объект типа Targets - набор структур [Target](Autocomplete.addTarget.htm).


## Комментарии


Структура Target включает в себя элемент управления, для которого будет применяться автозавершение, и настройки автозавершения для этого элемента управления.


## Пример


Для выполнения примера предполагается наличие на страницы компонента Autocomplete с наименованием «autocomplete» (см. «[Конструктор Autocomplete](Constructor_Autocomplete.htm)»). В систему автозавершения должен быть включен элемент управления с идентификатором «NE1». Отключим подсказку для компонента с идентификатором «NE1»:


autocomplete.getTargets().NE1.[Active](Autocomplete.Active.htm) = false


После выполнения примера для элемента управления с идентификатором «NE1» будет отключено автозавершение.


См. также:


[Autocomplete](Autocomplete.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
