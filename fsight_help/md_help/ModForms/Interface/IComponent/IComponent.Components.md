# IComponent.Components

IComponent.Components
-


# IComponent.Components


## Синтаксис


Components(Index: Integer): [IComponent](IComponent.htm);


## Параметры


Index.
 Индекс компонента, на который необходимо получить ссылку.


## Описание


Свойство Components возвращает
 дочерний компонент, индекс которого передается посредством входного параметра.


## Пример


Для выполнения примера предполагается наличие формы и расположенных
 на ней каких-либо компонентов. Для формы создан обработчик события OnCreate.


			Class TESTForm: Form

    //...

    //Список компонентов формы

    //...


    Sub TESTFormOnCreate(Sender: Object; Args: IEventArgs);

    Begin

        //Подготовка компонентов к работе формы

        PrepareComponents(Self);

    End Sub TESTFormOnCreate;


    Sub PrepareComponents(Component: IComponent);

    Var

        i: Integer;

        ChildComponent: IComponent;

    Begin

        For i := 0 To Component.ComponentCount - 1 Do

            ChildComponent := Component.Components(i);

            //В Tag запишем индекс компонента относительно его родительского компонента

            ChildComponent.Tag := i;

            //Если компонент - кнопка, то подпишем его на событие BtnOnClick

            If ChildComponent Is Button Then

                (ChildComponent As Button).OnClick := BtnOnClick;

            End If;

            ChildComponent.Data := GuidGenerator.Generate;

            //Если компонент является контейнером для других компонентов, то подготовим их рекурсивно

            If ChildComponent.ComponentCount > 0 Then

                PrepareComponents(ChildComponent);

            End If;

        End For;

    End Sub PrepareComponents;


    Sub BtnOnClick(Sender: Object; Args: IMouseEventArgs);

    Var

        Comp: IComponent;

    Begin

        Comp := Sender As IComponent;

        Debug.WriteLine(Comp.Name);

        Debug.WriteLine(Comp.Data);

    End Sub BtnOnClick;

End Class TESTForm;


При запуске формы осуществляется рекурсивный обход всех её компонентов
 и настройка базовых свойств: в свойстве Tag будет храниться порядковый
 номер компонента относительно его родительского компонента; в свойстве
 Data для каждого компонента будет сгенерирован уникальный глобальный идентификатор.
 Также все кнопки будут подписаны на общее событие BtnOnClick.


См. также:


[Интерфейсы сборки Forms](../ModForms_Interfaces.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
