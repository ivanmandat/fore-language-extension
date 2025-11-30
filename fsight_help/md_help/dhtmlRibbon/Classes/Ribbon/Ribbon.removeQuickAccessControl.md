# Ribbon.removeQuickAccessControl

Ribbon.removeQuickAccessControl
-


# Ribbon.removeQuickAccessControl


## Синтаксис


removeQuickAccessControl (value: Number);


## Параметры


value. Индекс кнопки, которую необходимо удалить.


## Описание


Метод removeQuickAccessControl удаляет кнопку из панели быстрого доступа по индексу.


## Комментарии


Панель быстрого доступа находится справа от кнопки приложения.


Элементы управления добавляются на панель быстрого доступа с помощью метода [addCategory](Ribbon.addCategory.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [Ribbon](../../Components/Ribbon/Ribbon.htm) с наименованием «ribbon». На панель быстрого доступа должна быть добавлена как минимум одна кнопка (см. «[Пример создания компонента Ribbon](../../Components/Ribbon/Example_Ribbon.htm)»). Удалим с панели быстрого доступа кнопку с индексом 0:


ribbon.removeQuickAccessControl(0);


После выполнения примера будет удалена первая кнопка на панели быстрого доступа.


См. также:


[Ribbon](Ribbon.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
