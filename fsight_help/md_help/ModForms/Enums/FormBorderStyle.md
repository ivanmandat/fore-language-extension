# FormBorderStyle

FormBorderStyle
-


# FormBorderStyle


## Описание


Перечисление FormBorderStyle
 содержит стили обрамления формы.


Используется следующим свойством:


	- [IFormControl.BorderStyle](../Interface/IFormControl/IFormControl.BorderStyle.htm)


## Допустимые значения


		 Значение
		 Краткое описание


		 0
		 None. Постоянный размер
		 формы, обрамления нет.


		 1
		 Single. Постоянный
		 размер формы, одинарное обрамление.


		 2
		 Dialog. Постоянный
		 размер формы, стандартное обрамление окна.


		 3
		 Sizeable. Стандартное
		 обрамление с возможностью изменения размеров окна.


		 4
		 DialogWithHelp. Дополнительная
		 кнопка-подсказка «?», при нажатии на которую активирется режим
		 отображения справки. При выборе для подсказки какого-либо компонента,
		 вызывается событие [OnHelp](../Class/Form/Form.OnHelp.htm),
		 в которое передается значение свойства [HelpContext](../Interface/IControl/IControl.HelpContext.htm)
		 выбранного компонента.

Эмулировать нажатие на данную кнопку можно методом
		 [EnterContextHelpMode](../Interface/IFormControl/IFormControl.EnterContextHelpMode.htm).


См. также:


[Перечисления сборки Forms](ModForms_Enums.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
