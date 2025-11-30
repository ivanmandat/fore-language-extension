# ITreeControl.ShowHints

ITreeControl.ShowHints
-


# ITreeControl.ShowHints


## Синтаксис


ShowHints: Boolean;


## Описание


Свойство ShowHints определяет, будут ли отображаться всплывающие подсказки при задержке мыши над элементами компонентов [TreeList](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/TreeList.htm) и [TreeCombo](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/TreeCombo.htm).


## Комментарии


Если свойству установлено значение True, то при задержке мыши над элементами будет отображаться всплывающая подсказка. Текст подсказки для различных элементов изменяется в обработчике события [OnGetHint](ITreeControl.OnGetHint.htm), путем изменения свойства [Text](../ITreeNodeGetHintEventArgs/ITreeNodeGetHintEventArgs.Text.htm) аргумента события.


При установке ShowHints значения True всплывающая подсказка, установленная в компоненте через свойства [IControl.ShowHint](../IControl/IControl.ShowHint.htm) и [IControl.Hint](../IControl/IControl.Hint.htm) игнорируется.


См. также:


[ITreeControl](ITreeControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
