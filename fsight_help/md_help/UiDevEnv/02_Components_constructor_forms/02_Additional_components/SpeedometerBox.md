# SpeedometerBox: Компонент

SpeedometerBox: Компонент
-


# SpeedometerBox


## Иерархия наследования


           [IComponent](modforms.chm::/Interface/IComponent/IComponent.htm)


           [IControl](ModForms.chm::/Interface/IControl/IControl.htm)


           [ISpeedometerBox](Speedometer.chm::/Interface/ISpeedometerBox/ISpeedometerBox.htm)


           [SpeedometerBox](Speedometer.chm::/Class/SpeedometerBox/SpeedometerBox.htm)


## Описание


Компонент SpeedometerBox представляет собой индикатор для отображения каких-либо данных на числовой панели в виде спидометра.


## Работа с компонентом


Работа с компонентом заключается в настройке внешнего вида спидометра. Доступ к спидометру осуществляется посредством свойства [Speedometer](Speedometer.chm::/Interface/ISpeedometerBox/ISpeedometerBox.Speedometer.htm). По умолчанию в спидометре имеется [одна шкала](Speedometer.chm::/Interface/ISpeedometerScale/ISpeedometerScale.htm), для данной шкалы создана [одна стрелка](Speedometer.chm::/Interface/ISpeedometerArrow/ISpeedometerArrow.htm). Для изменения количества отображаемых шкал необходимо определить значение свойства [Count](Speedometer.chm::/Interface/ISpeedometerScales/ISpeedometerScales.Count.htm) коллекции [Scales](Speedometer.chm::/Interface/ISpeedometer/ISpeedometer.Scales.htm) спидометра. [Параметры значений](Speedometer.chm::/Interface/ISpeedometerScale/ISpeedometerScale.htm) для каждой шкалы настраиваются индивидуально.


На шкале в качестве индикатора используются [стрелки](Speedometer.chm::/Interface/ISpeedometerArrow/ISpeedometerArrow.htm). По умолчанию любая новая шкала имеет одну стрелку. Для изменения количества отображаемых стрелок необходимо определить значение свойства [Count](Speedometer.chm::/Interface/ISpeedometerArrows/ISpeedometerArrows.Count.htm) коллекции [Arrows](Speedometer.chm::/Interface/ISpeedometerScale/ISpeedometerScale.Arrows.htm). [Параметры значений](Speedometer.chm::/Interface/ISpeedometerArrow/ISpeedometerArrow.htm) для каждой стрелки настраиваются индивидуально. Отображаемое значение определяется в свойстве [Value](Speedometer.chm::/Interface/ISpeedometerArrow/ISpeedometerArrow.Value.htm) соответствующей стрелки.


Отдельно от параметров значений для [шкал](Speedometer.chm::/Interface/ISpeedometer/ISpeedometer.Scales.htm) и [стрелок](Speedometer.chm::/Interface/ISpeedometerScale/ISpeedometerScale.Arrows.htm) можно определить [параметры отображения](Speedometer.chm::/Interface/ISpeedometer/ISpeedometer.View.htm). Для всех шкал по умолчанию используются общие параметры отображения. Для установки индивидуальных параметров необходимо определить значение свойства [Count](Speedometer.chm::/Interface/ISpeedometerScaleViews/ISpeedometerScaleViews.Count.htm) коллекции [ScaleViews](Speedometer.chm::/Interface/ISpeedometerView/ISpeedometerView.ScaleViews.htm). Для шкал, не имеющих собственных параметров отображения, будут применяться параметры отображения первой шкалы. Параметры отображения стрелок доступны посредством свойства [View](Speedometer.chm::/Interface/ISpeedometerArrow/ISpeedometerArrow.View.htm) каждой стрелки.


Также на каждой шкале может отображаться цветовая интервальная полоса. Доступ к параметрам отображения интервальной полосы осуществляется посредством свойства [FilledBar](Speedometer.chm::/Interface/ISpeedometerScaleView/ISpeedometerScaleView.FilledBar.htm). Для отображения интервальной полосы необходимо определить следующий минимальный набор параметров:


-
[Начальный](Speedometer.chm::/Interface/ISpeedometerFilledBar/ISpeedometerFilledBar.StartRadius.htm) или [конечный](Speedometer.chm::/Interface/ISpeedometerFilledBar/ISpeedometerFilledBar.EndRadius.htm) радиусы полосы.


-
[Начальный](Speedometer.chm::/Interface/ISpeedometerBar/ISpeedometerBar.StartColor.htm) или [конечный](Speedometer.chm::/Interface/ISpeedometerBar/ISpeedometerBar.EndColor.htm) цвета сегмента полосы.


-
[Долю шкалы](Speedometer.chm::/Interface/ISpeedometerBar/ISpeedometerBar.Part.htm), занимаемую сегментом (если используется один сегмент, то необходимо установить любое значение, отличное от нуля, при этом данный сегмент будет занимать всю область шкалы).


## Пример


![](SpeedometrBox_Sample.gif)


## Свойства компонента SpeedometerBox


 Имя свойства
 Краткое описание


 ![](../../Property_Image.gif)
 [Align](ModForms.chm::/Interface/IControl/IControl.Align.htm)
 Свойство Align определяет, как поведет себя компонент при изменении размеров содержащего его родительского компонента.


 ![](../../Property_Image.gif)
 [AllowDrag](ModForms.chm::/Interface/IControl/IControl.AllowDrag.htm)
 Свойство AllowDrag определяет возможность взять у компонента перетаскиваемый объект.


 ![](../../Property_Image.gif)
 [AllowDrop](ModForms.chm::/Interface/IControl/IControl.AllowDrop.htm)
 Свойство AllowDrop определяет, будет ли возможность у компонента принять перетаскиваемый объект.


 ![](../../Property_Image.gif)
 [Anchors](ModForms.chm::/Interface/IControl/IControl.Anchors.htm)
 Свойство Anchors возвращает настройки, определяющие в процентном соотношении изменение размеров текущего компонента при изменении размеров родительского компонента.


 ![](../../Property_Image.gif)
 [BorderStyle](Speedometer.chm::/Interface/ISpeedometerBox/ISpeedometerBox.BorderStyle.htm)
 Свойство BorderStyle определяет стиль границы компонента.


 ![](../../Property_Image.gif)
 [Brush](ModForms.chm::/Interface/IControl/IControl.Brush.htm)
 Свойство Brush определяет кисть, используемую для заливки области компонента.


 ![](../../Property_Image.gif)
 [ClientHeight](ModForms.chm::/Interface/IControl/IControl.ClientHeight.htm)
 Свойство ClientHeight используется для получения или задания высоты клиентской области компонента.


 ![](../../Property_Image.gif)
 [ClientWidth](ModForms.chm::/Interface/IControl/IControl.ClientWidth.htm)
 Свойство ClientWidth используется для получения или задания ширины клиентской области компонента.


 ![](../../Property_Image.gif)
 [Color](ModForms.chm::/Interface/IControl/IControl.Color.htm)
 Свойство Color определяет цвет фона компонента.


 ![](../../Property_Image.gif)
 [ComponentCount](ModForms.chm::/Interface/IComponent/IComponent.ComponentCount.htm)
 Свойство ComponentCount возвращает количество дочерних компонентов.


 ![](../../Property_Image.gif)
 [Components](ModForms.chm::/Interface/IComponent/IComponent.Components.htm)
 Свойство Components возвращает дочерний компонент.


 ![](../../Property_Image.gif)
 [Cursor](ModForms.chm::/Interface/IControl/IControl.Cursor.htm)
 Свойство Cursor определяет вид курсора над компонентом.


 ![](../../Property_Image.gif)
 [Data](ModForms.chm::/Interface/IComponent/IComponent.Data.htm)
 Свойство Data предназначено для хранения любых пользовательских данных.


 ![](../../Property_Image.gif)
 [Enabled](ModForms.chm::/Interface/IControl/IControl.Enabled.htm)
 Свойство Enabled определяет доступность компонента для пользователя.


 ![](../../Property_Image.gif)
 [Focused](ModForms.chm::/Interface/IControl/IControl.Focused.htm)
 Свойство Focused возвращает True, если фокус установлен на данном компоненте.


 ![](../../Property_Image.gif)
 [Font](ModForms.chm::/Interface/IControl/IControl.Font.htm)
 Свойство Font определяет множество характеристик, описывающих шрифт, используемый при отображении текста.


 ![](../../Property_Image.gif)
 [Height](ModForms.chm::/Interface/IControl/IControl.Height.htm)
 Свойство Height определяет высоту компонента.


 ![](../../Property_Image.gif)
 [HelpContext](ModForms.chm::/Interface/IControl/IControl.HelpContext.htm)
 Свойство HelpContext определяет уникальный индекс раздела контекстно-зависимой справки для данного компонента.


 ![](../../Property_Image.gif)
 [Hint](ModForms.chm::/Interface/IControl/IControl.Hint.htm)
 Свойство Hint определяет текст подсказки для компонента.


 ![](../../Property_Image.gif)
 [Left](ModForms.chm::/Interface/IControl/IControl.Left.htm)
 Свойство Left определяет координату левого края компонента.


 ![](../../Property_Image.gif)
 [Name](ModForms.chm::/Interface/IComponent/IComponent.Name.htm)
 Свойство Name определяет наименование компонента.


 ![](../../Property_Image.gif)
 [Parent](ModForms.chm::/Interface/IControl/IControl.Parent.htm)
 Свойство Parent определяет родительский компонент.


 ![](../../Property_Image.gif)
 [ParentColor](ModForms.chm::/Interface/IControl/IControl.ParentColor.htm)
 Свойство ParentColor определяет, будет ли для компонента заимствован цвет родительского компонента.


 ![](../../Property_Image.gif)
 [ParentFont](ModForms.chm::/Interface/IControl/IControl.ParentFont.htm)
 Свойство ParentFont определяет, будет ли для компонента использоваться шрифт родительского компонента.


 ![](../../Property_Image.gif)
 [ParentShowHint](ModForms.chm::/Interface/IControl/IControl.ParentShowHint.htm)
 Свойство ParentShowHint определяет условие отображения всплывающей подсказки.


 ![](../../Property_Image.gif)
 [PopupMenu](ModForms.chm::/Interface/IControl/IControl.PopupMenu.htm)
 Свойство PopupMenu определяет контекстное меню, которое будет появляться по щелчку дополнительной кнопки мыши на компоненте.


 ![](../../Property_Image.gif)
 [Scrolls](ModForms.chm::/Interface/IControl/IControl.Scrolls.htm)
 Свойство Scrolls возвращает параметры полос прокрутки компонента.


 ![](../../Property_Image.gif)
 [ShowHint](ModForms.chm::/Interface/IControl/IControl.ShowHint.htm)
 Свойство ShowHint включает и выключает показ всплывающего окна подсказки для компонента.


 ![](../../Property_Image.gif)
 [Speedometer](Speedometer.chm::/Interface/ISpeedometerBox/ISpeedometerBox.Speedometer.htm)
 Свойство Speedometer возвращает параметры спидометра, отображаемого в компоненте.


 ![](../../Property_Image.gif)
 [TabOrder](ModForms.chm::/Interface/IControl/IControl.TabOrder.htm)
 Свойство TabOrder определяет позицию компонента в последовательности табуляции.


 ![](../../Property_Image.gif)
 [TabStop](ModForms.chm::/Interface/IControl/IControl.TabStop.htm)
 Свойство TabStop определяет признак необходимости компоненту получать фокус при нажатии кнопки «TAB».


 ![](../../Property_Image.gif)
 [Tag](ModForms.chm::/Interface/IComponent/IComponent.Tag.htm)
 Свойство Tag не используется компилятором. Пользователь может изменить значение свойства Tag и использовать его по своему усмотрению.


 ![](../../Property_Image.gif)
 [Text](ModForms.chm::/Interface/IControl/IControl.Text.htm)
 Свойство Text определяет строку, идентифицирующую компонент для пользователя.


 ![](../../Property_Image.gif)
 [Top](ModForms.chm::/Interface/IControl/IControl.Top.htm)
 Свойство Top определяет координату верхнего края компонента.


 ![](../../Property_Image.gif)
 [Visible](ModForms.chm::/Interface/IControl/IControl.Visible.htm)
 Свойство Visible определяет видимость компонента во время выполнения.


 ![](../../Property_Image.gif)
 [Width](ModForms.chm::/Interface/IControl/IControl.Width.htm)
 Свойство Width определяет ширину компонента.


## Методы компонента SpeedometerBox


 Имя метода
 Краткое описание


 ![](../../Sub_Image.gif)
 [BringToFront](ModForms.chm::/Interface/IControl/IControl.BringToFront.htm)
 Метод BringToFront располагает компонент на передний план.


 ![](../../Sub_Image.gif)
 [ClientToScreen](ModForms.chm::/Interface/IControl/IControl.ClientToScreen.htm)
 Метод ClientToScreen преобразовывает координаты точки, указанные относительно системы координат компонента, в экранные координаты.


 ![](../../Sub_Image.gif)
 [DoDragDrop](ModForms.chm::/Interface/IControl/IControl.DoDragDrop.htm)
 Метод DoDragDrop позволяет начать операцию перетаскивания.


 ![](../../Sub_Image.gif)
 [GetImage](ModForms.chm::/Interface/IControl/IControl.GetImage.htm)
 Метод GetImage возвращает изображение компонента со всеми дочерними компонентами.


 ![](../../Sub_Image.gif)
 [ScreenToClient](ModForms.chm::/Interface/IControl/IControl.ScreenToClient.htm)
 Метод ScreenToClient преобразовывает экранные координаты точки в координаты, указываемые относительно системы координат компонента.


 ![](../../Sub_Image.gif)
 [SendToBack](ModForms.chm::/Interface/IControl/IControl.SendToBack.htm)
 Метод SendToBack располагает компонент на задний план.


 ![](../../Sub_Image.gif)
 [SetFocus](ModForms.chm::/Interface/IControl/IControl.SetFocus.htm)
 Метод SetFocus устанавливает фокус на данный компонент.


## События компонента SpeedometerBox


 Имя события
 Краткое описание


 ![](../../Event_Image.gif)
 [OnBeginDrag](ModForms.chm::/Interface/IControl/IControl.OnBeginDrag.htm)
 Событие OnBeginDrag для компонента наступает, когда пользователь начинает перетаскивать объект от компонента.


 ![](../../Event_Image.gif)
 [OnClick](ModForms.chm::/Interface/IControl/IControl.OnClick.htm)
 Событие OnClick наступает, если пользователь щёлкнул в области компонента.


 ![](../../Event_Image.gif)
 [OnDblClick](ModForms.chm::/Interface/IControl/IControl.OnDblClick.htm)
 Событие OnDblClick наступает, если пользователь дважды щёлкнул в области компонента.


 ![](../../Event_Image.gif)
 [OnDragDrop](ModForms.chm::/Interface/IControl/IControl.OnDragDrop.htm)
 Событие OnDragDrop для компонента наступает, когда пользователь отпускает над ним перетаскиваемый объект.


 ![](../../Event_Image.gif)
 [OnDragEnter](ModForms.chm::/Interface/IControl/IControl.OnDragEnter.htm)
 Событие OnDragEnter наступает, когда перетаскиваемый объект входит в границы данного компонента.


 ![](../../Event_Image.gif)
 [OnDragLeave](ModForms.chm::/Interface/IControl/IControl.OnDragLeave.htm)
 Событие OnDragLeave наступает, когда перетаскиваемый объект выходит за границы данного компонента.


 ![](../../Event_Image.gif)
 [OnDragOver](ModForms.chm::/Interface/IControl/IControl.OnDragOver.htm)
 Событие OnDragOver для компонента наступает, когда пользователь протаскивает над ним перетаскиваемый объект.


 ![](../../Event_Image.gif)
 [OnEnter](ModForms.chm::/Interface/IControl/IControl.OnEnter.htm)
 Событие OnEnter наступает в момент получения фокуса компонентом.


 ![](../../Event_Image.gif)
 [OnExit](ModForms.chm::/Interface/IControl/IControl.OnExit.htm)
 Событие OnExit наступает в момент потери фокуса компонентом.


 ![](../../Event_Image.gif)
 [OnHScroll](ModForms.chm::/Interface/IControl/IControl.OnHScroll.htm)
 Событие OnHScroll наступает при изменении положения ползунка горизонтальной полосы прокрутки.


 ![](../../Event_Image.gif)
 [OnKeyDown](ModForms.chm::/Interface/IControl/IControl.OnKeyDown.htm)
 Событие OnKeyDown наступает, если компонент находится в фокусе и производится нажатие на клавиатуру.


 ![](../../Event_Image.gif)
 [OnKeyPress](ModForms.chm::/Interface/IControl/IControl.OnKeyPress.htm)
 Событие OnKeyPress наступает, если компонент находится в фокусе, при нажатии пользователем символьной клавиши.


 ![](../../Event_Image.gif)
 [OnKeyPreview](ModForms.chm::/Interface/IControl/IControl.OnKeyPreview.htm)
 Событие OnKeyPreview наступает перед каждым событием, связанным с нажатием клавиш.


 ![](../../Event_Image.gif)
 [OnKeyUp](ModForms.chm::/Interface/IControl/IControl.OnKeyUp.htm)
 Событие OnKeyUp наступает, если компонент находится в фокусе, при отпускании пользователем любой, ранее нажатой клавиши.


 ![](../../Event_Image.gif)
 [OnMouseDown](ModForms.chm::/Interface/IControl/IControl.OnMouseDown.htm)
 Событие OnMouseDown наступает, если указатель находится в области компонента и была нажата любая кнопка мыши.


 ![](../../Event_Image.gif)
 [OnMouseEnter](ModForms.chm::/Interface/IControl/IControl.OnMouseEnter.htm)
 Событие OnMouseEnter наступает в момент входа курсора мыши в область компонента.


 ![](../../Event_Image.gif)
 [OnMouseHover](ModForms.chm::/Interface/IControl/IControl.OnMouseHover.htm)
 Событие OnMouseHover наступает при задержке курсора мыши в области компонента.


 ![](../../Event_Image.gif)
 [OnMouseLeave](ModForms.chm::/Interface/IControl/IControl.OnMouseLeave.htm)
 Событие OnMouseLeave наступает в момент выхода курсора мыши за пределы области компонента.


 ![](../../Event_Image.gif)
 [OnMouseMove](ModForms.chm::/Interface/IControl/IControl.OnMouseMove.htm)
 Событие OnMouseMove наступает при перемещении курсора мыши над компонентом.


 ![](../../Event_Image.gif)
 [OnMouseUp](ModForms.chm::/Interface/IControl/IControl.OnMouseUp.htm)
 Событие OnMouseUp наступает при отпускании кнопки мыши, когда указатель находится в области компонента.


 ![](../../Event_Image.gif)
 [OnMouseWheel](ModForms.chm::/Interface/IControl/IControl.OnMouseWheel.htm)
 Событие OnMouseWheel наступает, если компонент находится в фокусе при вращении колеса мыши.


 ![](../../Event_Image.gif)
 [OnVScroll](ModForms.chm::/Interface/IControl/IControl.OnVScroll.htm)
 Событие OnVScroll наступает при изменении положения ползунка вертикальной полосы прокрутки.


См. также:


[Дополнительные компоненты](Additional_components.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
