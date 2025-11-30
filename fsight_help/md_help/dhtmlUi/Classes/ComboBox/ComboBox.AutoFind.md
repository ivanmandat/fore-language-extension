# ComboBox.AutoFind

ComboBox.AutoFind
-


# ComboBox.AutoFind


## Синтаксис


AutoFind: Boolean


## Описание


Свойство AutoFind устанавливает возможность автопоиска.


## Комментарии


При установке значения true включается возможность автопоиска. По умолчанию установлено значение true.


Свойство актуально, если для свойства [EnableEdit](../Combo/Combo.EnableEdit.htm) установлено значение true.


При работе с методом [ComboBox.filterByText](ComboBox.filterByText.htm) для свойства AutoFind должно быть установлено значение false.


## Пример


Для выполнения примера создайте компонент [ComboBox](../../Components/ComboBox/ComboBox.htm) (см. «[Пример создания компонента ComboBox](../../Components/ComboBox/Constructor_ComboBox.htm)»). Для свойства AutoFind установите значение true:


AutoFind: true


После выполнения примера при вводе в строке редактирования более 3 символов, совпадающих с текстом элементов списка, будут выведены результаты:


![](../../Components/ComboBox/ComboBox2.gif)


См. также:


[ComboBox](ComboBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
