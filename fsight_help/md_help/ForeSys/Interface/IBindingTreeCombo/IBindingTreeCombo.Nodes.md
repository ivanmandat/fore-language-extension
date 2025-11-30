# IBindingTreeCombo.Nodes

IBindingTreeCombo.Nodes
-


# IBindingTreeCombo.Nodes


## Синтаксис


Nodes: String;


## Описание


Свойство Nodes определяет значение
 параметра «NODES» в [строке
 связи](../IBindingValue/IBindingValue.AsString.htm).


## Комментарии


Параметр «NODES» определяет
 наименования вершин комбинированного дерева. Наименования должны быть
 разделены с помощью символа-разделителя, заданного в свойстве [IBindingTreeCombo.Separators](IBindingTreeCombo.Separators.htm).
 В фигурных скобках указываются подэлементы вершины. Пример: "A,{A1,{A11},A2},B,{B1}",
 в качестве символа-разделителя используется «,».


Свойство Nodes доступно для
 использования, если свойству [IBindingTreeCombo.NodesDefined](IBindingTreeCombo.NodesDefined.htm)
 установлено значение True. При
 изменении свойства Nodes свойству
 [IBindingTreeCombo.NodesDefined](IBindingTreeCombo.NodesDefined.htm)
 автоматически устанавливается значение True.


## Пример


	Function CreateTreeComboBidning(Nodes: String; Separator: String; DefaultNode: String = ""): String;

	Var

	    BM: IBindingManager;

	    TreeComboBinding: IBindingTreeCombo;

	Begin

	    BM := New BindingManager.Create;

	    TreeComboBinding := BM.CreateByUi("TreeCombo") As IBindingTreeCombo;

	    //Вершины

	    TreeComboBinding.Nodes := Nodes;

	    //Разделитель вершин

	    TreeComboBinding.Separators := Separator;

	    //Вершина по умолчанию

	    If DefaultNode <> "" Then

	        TreeComboBinding.Value := DefaultNode;

	    End If;

	    Return TreeComboBinding.AsString;

	End Function CreateTreeComboBidning;


Данная функция генерирует строку связи для использования редактора в
 виде комбинированного дерева. Вершины дерева и основные настройки дерева
 передаются посредством входных параметров. Вершины, передаваемые в параметре
 Nodes, должны быть сформированы в виде строки, формат которой допустим
 для указания в свойстве [Nodes](IBindingTreeCombo.Nodes.htm).


См. также:


[IBindingTreeCombo](IBindingTreeCombo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
