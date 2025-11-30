# ITreeSearchNodeEventArgs.Show

ITreeSearchNodeEventArgs.Show
-


# ITreeSearchNodeEventArgs.Show


## Синтаксис


Show: Boolean;


## Описание


Свойство Show определяет, будет
 ли осуществлен показ найденного элемента.


## Комментарии


По умолчанию свойству установлено значение True,
 при этом элемент будет сфокусирован (при [поиске](../ITreeControl/ITreeControl.OnSearch.htm))
 или попадет в конечный список (при [фильтрации](../../Class/TreeCombo/TreeCombo.OnFilter.htm)).
 Если свойству установить значение False,
 то элемент будет пропущен (при [поиске](../ITreeControl/ITreeControl.OnSearch.htm))
 или скрыт из конечного списка (при [фильтрации](../../Class/TreeCombo/TreeCombo.OnFilter.htm)).


## Пример


Пример использования приведен в описании события [OnFilter](../../Class/TreeCombo/TreeCombo.OnFilter.htm).


См. также:


[ITreeSearchNodeEventArgs](ITreeSearchNodeEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
