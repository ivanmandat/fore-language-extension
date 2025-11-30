# IRdsDictionaryBox.AdjustWidthOnlyVisible

IRdsDictionaryBox.AdjustWidthOnlyVisible
-


# IRdsDictionaryBox.AdjustWidthOnlyVisible


## Синтаксис


AdjustWidthOnlyVisible: Boolean;


## Описание


Свойство AdjustWidthOnlyVisible
 определяет способ автоподгонки ширины столбцов.


## Комментарии


Допустимые значения:


	- True. Автоподгонка учитывает
	 только ширину элементов, которые видны в компоненте. Ширина элементов,
	 доступных с помощью прокрутки, не учитывается;


	- False. Значение по умолчанию.
	 Автоподгонка учитывает ширину всех элементов.


Для выполнения автоподгонки ширины дважды щелкните по границе между
 столбцами.


## Пример


Для выполнения примера предполагается наличие формы, содержащей:


	- компонент RdsDictionaryBox
	 с идентификатором RdsDictionaryBox1;


	- компонент UiRdsDictionary с
	 загруженным справочником НСИ, являющимся источником данных для RdsDictionaryBox1;


	- компоненты CheckBox
	 с идентификаторами ChB_Adjust,
	 ChB_Header, ChB_Highlight;


	- кнопку с идентификатором Button1.


Пример является обработчиком события OnClick
 для кнопки Button1.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Begin

    RdsDictionaryBox1.AdjustWidthOnlyVisible := ChB_Adjust.Checked;

    RdsDictionaryBox1.ShowHeaderButton := ChB_Header.Checked;

    RdsDictionaryBox1.HighlightTrack := ChB_Highlight.Checked;

End Sub Button1OnClick;


После выполнения примера параметры RdsDictionaryBox1
 будут установлены в соответствии с состоянием флажков:


	- ChB_Adjust управляет
	 свойством [IRdsDictionaryBox.AdjustWidthOnlyVisible](IRdsDictionaryBox.AdjustWidthOnlyVisible.htm)
	 (способ автоподгонки ширины столбцов);


	- ChB_Header управляет
	 свойством [IRdsDictionaryBox.ShowHeaderButton](IRdsDictionaryBox.ShowHeaderButton.htm)
	 (видимость кнопки, вызывающей меню заголовков столбцов);


	- ChB_Highlight управляет
	 свойством [IRdsDictionaryBox.HighlightTrack](IRdsDictionaryBox.HighlightTrack.htm)
	 (подсветка элементов при наведении указателя мыши).


Если флажок установлен, то соответствующее ему свойство, принимает значение
 True; если снят - False.


См. также:


[IRdsDictionaryBox](IRdsDictionaryBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
