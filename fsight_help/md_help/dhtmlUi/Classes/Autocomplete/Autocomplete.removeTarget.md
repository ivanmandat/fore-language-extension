# Autocomplete.removeTarget

Autocomplete.removeTarget
-


# Autocomplete.removeTarget


## Синтаксис


removeTarget (target)


## Параметры


target. Идентификатор или экземпляр элемента управления, который необходимо удалить из системы автозавершения.


## Описание


Метод removeTarget удаляет указанный элемент управления из системы автозавершения.


## Пример


Для выполнения примера предполагается наличие на страницы компонента [Autocomplete](../../Components/Autocomplete/Autocomplete.htm) с наименованием «autocomplete» (см. «[Конструктор Autocomplete](Constructor_Autocomplete.htm)»). Размещенный компонент представляет собой систему автозавершения, в которую включены два элемента: компонент TextBox с идентификатором «TB1» и компонент [NumberEdit](../../Components/NumberEdit/NumberEdit.htm) с идентификатором «NE1». Для каждого компонента определен [список вариантов](Autocomplete.Suggestions.htm) для автозавершения.  Удалим компонент TextBox  с идентификатором «TB1» из системы автозавершения:


autocomplete.removeTarget("TB1")


После выполнения примера элемент управления с идентификатором «TB1» будет удален из системы автозавершения. Это значит, что для компонента TextBox не будет доступно автоматическое заполнение по вариантам, список которых установлен в свойстве [Autocomplete.Suggestions](Autocomplete.Suggestions.htm).


См. также:


[Autocomplete](Autocomplete.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
