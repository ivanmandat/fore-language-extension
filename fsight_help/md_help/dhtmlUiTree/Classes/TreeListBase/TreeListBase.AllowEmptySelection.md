# TreeListBase.AllowEmptySelection

TreeListBase.AllowEmptySelection
-


# TreeListBase.AllowEmptySelection


## Синтаксис


AllowEmptySelection: Boolean;


## Описание


Свойство AllowEmptySelection
 определяет возможность нулевой отметки.


## Комментарии


Значение свойства устанавливается с помощью метода setAllowEmptySelection,
 а возвращается с помощью метода getAllowEmptySelection.


## Пример


Для выполнения примера необходим компонент SimpleTreeList с идентификатором
 «Tree» (см. «[Пример
 создания компонента SimpleTreeList](../../Components/SimpleTreeList/SimpleTreeList_Example.htm)»).


// Зададим возможность нулевой отметки
Tree.setAllowEmptySelection(false);
В результате выполнения примера будет установлен режим с обязательной
 отметкой как минимум одного элемента.


См. также:


[TreeListBase](TreeListBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
