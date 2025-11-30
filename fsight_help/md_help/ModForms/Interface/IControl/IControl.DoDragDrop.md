# IControl.DoDragDrop

IControl.DoDragDrop
-


# IControl.DoDragDrop


## Синтаксис


DoDragDrop(


Data: Variant;


AllowedEffects: [DragDropEffects](../../Enums/DragDropEffects.htm);


[Immediate: Boolean =
 True;]


[Format: [DragDropFormat](../../Enums/DragDropFormat.htm)
 = 0]);


## Параметры


Data. Параметр, определяющий
 перетаскиваемый объект;


AllowedEffects. Параметр, определяющий
 вид применяемого Drag&Drop эффекта;


Immediate. Необязательный параметр,
 определяющий, когда начнется операция перетаскивания объекта. По умолчанию
 в качестве значения параметра передается значение True,
 при этом операция перетаскивания начинается сразу. Если в качестве значения
 параметра передать значение False,
 то операция перетаскивания начнется после смещения указателя мыши на определенное
 расстояние. Расстояние обусловлено размерами прямоугольника, отцентрированного
 в точке, где была нажата кнопка мыши. Ширина и высота прямоугольника соответствуют
 системным значениям, которые хранятся в реестре Windows;


Format. Необязательный параметр,
 определяющий, в каком формате будут передаваться данные при перетаскивании.
 Актуально при работе с навигатором объектов. Если в качестве значения
 параметра передается DragDropFormat.MetabaseObjectList, то при передаче
 в качестве параметра Data массива
 с [описаниями
 объектов](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm), навигатором объектов данный массив будет
 восприниматься как коллекция соответствующих объектов репозитория и обрабатываться
 соответствующим образом (ни одна клавиша не зажата - перемещение; зажата
 клавиша CTRL - копирование; зажата клавиша ALT - создание ярлыка).


## Описание


Метод DoDragDrop позволяет начать
 операцию перетаскивания.


## Пример


Для выполнения примера предполагается наличие формы и расположенного
 на ней компонента TreeList с наименованием
 «TreeList1». Для компонента «TreeList1»
 свойству [AllowDrag](IControl.AllowDrag.htm) установлено значение
 True.


			Class TestForm: Form

    TreeList1: TreeList;


    Sub TestFormOnCreate(Sender: Object; Args: IEventArgs);

    Var

        MB: IMetabase;

        MDescs: IMetabaseObjectDescriptors;

        MDesc: IMetabaseObjectDescriptor;

        Nodes: ITreeListNodes;

        Node: ITreeListNode;

        i: Integer;

    Begin

        MB := MetabaseClass.Active;

        MDescs := MB.Root.Children;

        Nodes := TreeList1.Nodes;

        For i := 1 To 10 Do

            MDesc := MDescs.Item(i);

            Node := Nodes.Add(Null, MDesc.Id);

            Node.Data := MDesc;

        End For;

    End Sub TestFormOnCreate;


    Sub TreeList1OnBeginDrag(Sender: Object; Args: IBeginDragEventArgs);

    Var

        Obj: Array Of Variant;

    Begin

        Obj := New Variant[1];

        Obj[0] := TreeList1.Selected.Data;

        TreeList1.DoDragDrop(Obj, DragDropEffects.None, True, DragDropFormat.MetabaseObjectList);

    End Sub TreeList1OnBeginDrag;

End Class TestForm;


При инициализации формы в компоненте «TreeList1»
 будут созданы десять элементов. Элементы будут соответствовать первым
 десяти объектам репозитория. В свойстве Data элементов будет содержаться
 описание объектов. При перетаскивании выделенного элемента в навигатор
 объектов будет инициализироваться перетаскивание соответствующего объекта
 репозитория и обрабатываться навигатором соответствующим образом.


См. также:


[IControl](IControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
