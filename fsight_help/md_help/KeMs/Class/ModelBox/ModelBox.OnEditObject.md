# ModelBox.OnEditObject

ModelBox.OnEditObject
-


# ModelBox.OnEditObject


## Синтаксис


OnEditObject(Sender: Object; Args: [IModelBoxEditObjectEventArgs](../../Interface/IModelBoxEditObjectEventArgs/IModelBoxEditObjectEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие.


Args. Ппараметр, возвращающий
 редактируемую модель.


## Описание


Событие OnEditObject наступает
 при открытии модели для редактирования.


## Пример


Для выполнения примера предполагается наличие формы, расположенных на
 ней двух компонентов ModelBox и двух компонентов UiModel. Компонент с
 наименованием «UiModel1» является источником данных для компонента с наименованием
 «ModelBox1», а «UiModel2» - для «ModelBox2». «UiModel1» обеспечивает доступ
 к модели, являющейся системой нелинейных уравнений.


Пример является обработчиком события OnEditObject
 для компонента «ModelBox1» и будет выполняться при нажатии кнопки «Редактировать» или двойному щелчку
 мышью по уравнению в панели «Параметры»
 данного компонента.


			Sub ModelBox1OnEditObject(Sender: Object; Args: IModelBoxEditObjectEventArgs);

Begin

    UiModel2.Object := Args.Object;

    UiModel2.Active := True;

End Sub ModelBox1OnEditObject;


После выполнения примера редактируемая модель будет открыта в компоненте
 «ModelBox2».


См. также:


[ModelBox](ModelBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
