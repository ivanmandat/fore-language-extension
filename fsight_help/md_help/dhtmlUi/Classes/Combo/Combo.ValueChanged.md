# Combo.ValueChanged

Combo.ValueChanged
-


# Combo.ValueChanged


## Синтаксис


ValueChanged: function (sender, args)


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие ValueChanged наступает
 после изменения содержимого редактора ввода.


## Комментарии


Аргументы события содержат следующие поля:


	- NewContent: String  //
	 Новый заголовок


	- NewText: String  //
	 Новый текст (дублирует значение)


	- NewValue: String  //
	 Новое значение


	- OldContent: String  //
	 Старый заголовок


	- OldText: String  //
	 Старый текст (дублирует значение)


	- OldValue: String  //
	 Старое значение


	- Source: PP.Ui.TextBox  //
	 Источник события


## Пример


Пример использования события приведен в описании метода [Combo.getTextBox](Combo.getTextBox.htm).


См. также:


[Combo](Combo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
