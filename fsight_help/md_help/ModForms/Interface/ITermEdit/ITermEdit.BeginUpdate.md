# ITermEdit.BeginUpdate

ITermEdit.BeginUpdate
-


# ITermEdit.BeginUpdate


## Синтаксис


BeginUpdate;


## Описание


Метод BeginUpdate отключает
 набор внутренних механизмов для ускорения вставки термов в компонент.


## Комментарии


После вызова метода BeginUpdate
 и до вызова [EndUpdate](ITermEdit.EndUpdate.htm)
 в компоненте будут отключены следующие механизмы:


	- Перерисовка текста;


	- Расчет и перерисовка полос прокрутки компонента;


	- Расчет и изменение позиции курсора;


	- Обработка события [OnChange](../ICustomEdit/ICustomEdit.OnChange.htm).


Примечание.
 Данный метод не отключает перерисовку компонента. Для отключения перерисовки
 используйте соответствующие методы [BeginUpdate](../IFormControl/IFormControl.BeginUpdate.htm)/[EndUpdate](../IFormControl/IFormControl.EndUpdate.htm) формы.


## Пример


	Sub InsertTerm(Control: ITermEdit);

	Begin

	    Control.BeginUpdate;

	    //...

	    //Вставка термов

	    //...

	    Control.EndUpdate;

	End Sub InsertTerm;


Указанный пример в общем виде демонстрирует использование методов BeginUpdate/EndUpdate
 для компонента TermEdit.


См. также:


[ITermEdit](ITermEdit.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
