# SetSpeedometer: Операция

SetSpeedometer: Операция
-


**


# SetSpeedometer


## Синтаксис


SetSpeedometerResult SetSpeedometer(SpeedometerId
 tSpeedometer, SetSpeedometerArg tArg)


## Параметры


tSpeedometer. Моникёр спидометра;


tArg. Параметры изменения настроек
 спидометра.


## Описание


Операция SetSpeedometer изменяет
 настройки спидометра.


## Комментарии


Для выполнения операции укажите в поле tSpeedometer
 моникёр спидометра, а в поле tArg.meta.md
 настройки спидометра, представленные в формате XML. В текущей реализации
 работа со спидометрами доступна только в аналитических панелях. Моникёр
 спидометра может быть сформирован на базе моникёра источника данных в
 аналитической панели по следующему правилу: «Моникёр
 аналитической панели»!DSO!«Идентификатор источника»!Speedometer.


Настройки, которые могут быть изменены и указаны в поле tArg.meta.md,
 можно получить с помощью операции [GetSpeedometer](GetSpeedometer.htm).


Если определено поле tArg.metaGet.metaData,
 то в результате выполнения операции будут получены обновлённые настройки
 спидометра.


## Пример


Ниже приведен пример использования операции SetSpeedometer
 для изменения настроек спидометра. В запросе передается моникёр спидометра
 и обновлённые настройки.


[![](../../Opened.gif)![](../../Closed.gif)SOAP](javascript:TextPopup(this))


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetSpeedometer xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tSpeedometer xmlns="****">
  <id>S1!M!S!AdHoc1!DSO!SCIOGHRM2O578C19!Speedometer</id>  </tSpeedometer>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<meta>
[![](../../minus.gif)](../../#)<md>
[![](../../minus.gif)](../../#)<Speedometer Padding="**0 0 0 0**" PaddingEnabled="**TRUE**" Opacity="**1**" OpacityEnabled="**TRUE**" BaseWidth="**220**" BaseHeight="**120**" ToolTip="****" OuterRadius="**100,100**" CenterPosition="**110,107**">
[![](../../minus.gif)](../../#)<Scales>
[![](../../minus.gif)](../../#)<Scale Opacity="**1**" OpacityEnabled="**TRUE**" BorderEnabled="**FALSE**" BorderWidth="**0**" BorderStyle="**solid**" CenterPosition="**110,115**" Size="**0**" Length="**180**" StartAngle="**90**" MinValue="**0**" MaxValue="**180**" Step="**50**" Id="****" Name="**Scale1**" ToolTip="**Scale**" OuterRadius="**1,1**" RotateLabels="**FALSE**" DisplayLabels="**TRUE**" DisplayMajorTicks="**TRUE**" IsAbsoluteSectorOffset="**TRUE**" DisplayMinorTicks="**TRUE**" Visible="**TRUE**">
[![](../../minus.gif)](../../#)<Sectors>
[![](../../minus.gif)](../../#)<Sector Opacity="**1**" OpacityEnabled="**TRUE**" StartValue="**0**" EndValue="**180**" StartSize="**1**" EndSize="**1**" IsVisible="**TRUE**" Offset="**0**">
[![](../../minus.gif)](../../#)<Background PPType="**PP.LinearGradientBrush**" StartPoint="**0,0.5**" EndPoint="**1,0.5**" Enabled="**TRUE**">
[![](../../minus.gif)](../../#)<GradientStops>
  <GradientStop Color="**#ffd5d3d3**" Offset="**0**" />
  <GradientStop Color="**#ffd5d3d3**" Offset="**0.01**" />
  <GradientStop Color="**#ff676767**" Offset="**0.080000000000000002**" />
  <GradientStop Color="**#ffd5d3d3**" Offset="**0.25**" />
  <GradientStop Color="**#ff676767**" Offset="**0.5**" />
  <GradientStop Color="**#ffd5d3d3**" Offset="**0.75**" />
  <GradientStop Color="**#ff676767**" Offset="**0.92000000000000004**" />
  <GradientStop Color="**#ffd2d2d2**" Offset="**0.98999999999999999**" />
  <GradientStop Color="**#ffd2d2d2**" Offset="**1**" />
  </GradientStops>
  </Background>
  </Sector>
[![](../../minus.gif)](../../#)<Sector Opacity="**1**" OpacityEnabled="**TRUE**" StartValue="**0**" EndValue="**180**" StartSize="**0.94999999999999996**" EndSize="**0.94999999999999996**" IsVisible="**TRUE**" Offset="**5**">
[![](../../minus.gif)](../../#)<Background PPType="**PP.LinearGradientBrush**" StartPoint="**0,0.5**" EndPoint="**1,0.5**" Enabled="**TRUE**">
[![](../../minus.gif)](../../#)<GradientStops>
  <GradientStop Color="**#ffbebebe**" Offset="**0**" />
  <GradientStop Color="**#ffbebebe**" Offset="**0.01**" />
  <GradientStop Color="**#ffdadada**" Offset="**0.25**" />
  <GradientStop Color="**#ff767676**" Offset="**0.5**" />
  <GradientStop Color="**#ffdfdfdf**" Offset="**0.80000000000000004**" />
  <GradientStop Color="**#ffaeaeae**" Offset="**0.98999999999999999**" />
  <GradientStop Color="**#ffaeaeae**" Offset="**1**" />
  </GradientStops>
  </Background>
  </Sector>
[![](../../minus.gif)](../../#)<Sector Opacity="**1**" OpacityEnabled="**TRUE**" StartValue="**0**" EndValue="**120**" StartSize="**0.01**" EndSize="**0.01**" IsVisible="**TRUE**" Offset="**1**">
[![](../../minus.gif)](../../#)<Background PPType="**PP.LinearGradientBrush**" StartPoint="**0,0.5**" EndPoint="**1,0.5**" Enabled="**TRUE**">
[![](../../minus.gif)](../../#)<GradientStops>
  <GradientStop Color="**#ffffffff**" Offset="**0**" />
  <GradientStop Color="**#ffffffff**" Offset="**0.01**" />
  <GradientStop Color="**#ffc7c7c7**" Offset="**0.75**" />
  <GradientStop Color="**#ffd2d0d0**" Offset="**0.90000000000000002**" />
  <GradientStop Color="**#ffd2d0d0**" Offset="**1**" />
  </GradientStops>
  </Background>
  </Sector>
  </Sectors>
  </Scale>
[![](../../minus.gif)](../../#)<Scale Opacity="**1**" OpacityEnabled="**TRUE**" BorderEnabled="**FALSE**" BorderWidth="**0**" BorderStyle="**solid**" CenterPosition="**110,112**" Size="**0**" Length="**180**" StartAngle="**90**" MinValue="**0**" MaxValue="**180**" Step="**50**" Id="****" Name="**Scale2**" ToolTip="**Scale**" OuterRadius="**0.949999988079071,0.920000016689301**" RotateLabels="**FALSE**" DisplayLabels="**TRUE**" DisplayMajorTicks="**TRUE**" IsAbsoluteSectorOffset="**FALSE**" DisplayMinorTicks="**TRUE**" Visible="**TRUE**">
[![](../../minus.gif)](../../#)<Sectors>
[![](../../minus.gif)](../../#)<Sector Opacity="**1**" OpacityEnabled="**TRUE**" StartValue="**0**" EndValue="**180**" StartSize="**1**" EndSize="**1**" IsVisible="**TRUE**" Offset="**0**">
  <Background PPType="**PP.SolidColorBrush**" Color="**#ffefefef**" Opacity="**1**" Enabled="**TRUE**" />
  </Sector>
[![](../../minus.gif)](../../#)<Sector Opacity="**1**" OpacityEnabled="**TRUE**" StartValue="**0**" EndValue="**180**" StartSize="**0.01**" EndSize="**0.01**" IsVisible="**TRUE**" Offset="**0.37**">
  <Background PPType="**PP.SolidColorBrush**" Color="**#ffa2a1a1**" Opacity="**1**" Enabled="**TRUE**" />
  </Sector>
[![](../../minus.gif)](../../#)<Sector Opacity="**1**" OpacityEnabled="**TRUE**" StartValue="**0**" EndValue="**180**" StartSize="**0.01**" EndSize="**0.01**" IsVisible="**TRUE**" Offset="**0**">
  <Background PPType="**PP.SolidColorBrush**" Color="**#ff666666**" Opacity="**1**" Enabled="**TRUE**" />
  </Sector>
[![](../../minus.gif)](../../#)<Sector Opacity="**1**" OpacityEnabled="**TRUE**" StartValue="**0**" EndValue="**180**" StartSize="**0.01**" EndSize="**0.01**" IsVisible="**TRUE**" Offset="**0.38**">
  <Background PPType="**PP.SolidColorBrush**" Color="**#ffffffff**" Opacity="**1**" Enabled="**TRUE**" />
  </Sector>
  </Sectors>
  </Scale>
[![](../../minus.gif)](../../#)<Scale Opacity="**1**" OpacityEnabled="**TRUE**" BorderEnabled="**FALSE**" BorderWidth="**0**" BorderStyle="**solid**" CenterPosition="**110,107**" DataSource="**DataSource0**" Size="**0**" Length="**180**" StartAngle="**90**" MinValue="**0**" MaxValue="**11.4**" Step="**0.57000000000000006**" Id="**DataScale**" Name="**Scale3**" ToolTip="**Scale**" OuterRadius="**0.949999988079071,0.875**" RotateLabels="**FALSE**" DisplayLabels="**TRUE**" DisplayMajorTicks="**TRUE**" IsAbsoluteSectorOffset="**TRUE**" DisplayMinorTicks="**TRUE**" Visible="**TRUE**">
[![](../../minus.gif)](../../#)<Arrows>
[![](../../minus.gif)](../../#)<Arrow Size="**1**" Value="**650**" Tail="**0**" Radius="**0.59999999999999998**" DimAttributeId="**Value**" PPType="**PP.Ui.LineArrow**" Opacity="**1**" OpacityEnabled="**TRUE**">
  <Border PPType="**PP.SolidColorBrush**" Color="**#ffff462c**" Opacity="**1**" />
  </Arrow>
  </Arrows>
[![](../../minus.gif)](../../#)<Labels>
  <Label>0.00</Label>  <Label>2.85</Label>  <Label>5.70</Label>  <Label>8.55</Label>  <Label>11.40</Label>  </Labels>
  <LabelFont Size="**8**" FontFamily="**Tahoma**" IsItalic="**FALSE**" IsBold="**FALSE**" IsUnderline="**FALSE**" Color="**#ff918f8d**" />
[![](../../minus.gif)](../../#)<MinorTick Opacity="**1**" OpacityEnabled="**TRUE**" Size="**0.02**" ToolTip="****" PPType="**PP.Ui.CircleMarker**" Style="**Inner**" BorderWidth="**3**" Offset="**-0.31**" BorderEnabled="**TRUE**" BorderStyle="**solid**" IsVisible="**TRUE**">
  <Background PPType="**PP.SolidColorBrush**" Color="**#ff8c8c8c**" Opacity="**1**" Enabled="**TRUE**" />
  </MinorTick>
[![](../../minus.gif)](../../#)<MajorTick Opacity="**1**" OpacityEnabled="**TRUE**" Size="**0.040000000000000001**" ToolTip="****" PPType="**PP.Ui.CircleMarker**" Style="**Inner**" BorderWidth="**3**" Offset="**-0.31**" BorderEnabled="**TRUE**" BorderStyle="**solid**" IsVisible="**TRUE**">
  <Background PPType="**PP.SolidColorBrush**" Color="**#ff8c8c8c**" Opacity="**1**" Enabled="**TRUE**" />
  </MajorTick>
[![](../../minus.gif)](../../#)<Values>
  <Value>0</Value>  <Value>2.8500000000000001</Value>  <Value>5.7000000000000002</Value>  <Value>8.5500000000000007</Value>  <Value>11.4</Value>  </Values>
  </Scale>
  </Scales>
[![](../../minus.gif)](../../#)<Timeline VerticalAlignment="**Bottom**" HorizontalAlignment="**Center**" IsVisible="**TRUE**" ReturnToInitialState="**TRUE**" IsOverlap="**FALSE**" StepDuration="**1000**" DelayDuration="**1000**" CurrentStep="**0**">
[![](../../minus.gif)](../../#)<StepsNames>
  <StepName>2009A1</StepName>  <StepName>2010A1</StepName>  <StepName>2011A1</StepName>  </StepsNames>
  </Timeline>
[![](../../minus.gif)](../../#)<Center Opacity="**1**" OpacityEnabled="**TRUE**" Size="**8**" ToolTip="**Center**" PPType="**PP.Ui.CircleMarker**" Style="**Center**" BorderWidth="**0**" Offset="**0**" BorderEnabled="**TRUE**" BorderStyle="**solid**" IsVisible="**TRUE**">
[![](../../minus.gif)](../../#)<Background PPType="**PP.LinearGradientBrush**" StartPoint="**1,1**" EndPoint="**0,-1.11022302462516E-16**" Enabled="**TRUE**">
[![](../../minus.gif)](../../#)<GradientStops>
  <GradientStop Color="**#ffff4433**" Offset="**0**" />
  <GradientStop Color="**#ffff4433**" Offset="**0.10000000000000001**" />
  <GradientStop Color="**#ffff190b**" Offset="**0.5**" />
  <GradientStop Color="**#ff9f0505**" Offset="**0.90000000000000002**" />
  <GradientStop Color="**#ff9f0505**" Offset="**1**" />
  </GradientStops>
  </Background>
  </Center>
[![](../../minus.gif)](../../#)<DataSources>
[![](../../minus.gif)](../../#)<DataSource0>
[![](../../minus.gif)](../../#)<Series>
  <Value Items="**5.7000000000000002 5.7000000000000002 5.7000000000000002**" />
  </Series>
  </DataSource0>
  </DataSources>
  </Speedometer>
  </md>
  </meta>
[![](../../minus.gif)](../../#)<metaGet>
  <metaData>true</metaData>  </metaGet>
  </tArg>
  </SetSpeedometer>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<SetSpeedometerResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>S1!M!S!AdHoc1!DSO!SCIOGHRM2O578C19!Speedometer</id>  </id>
[![](../../minus.gif)](../../#)<metaGet xmlns="****">
[![](../../minus.gif)](../../#)<md>
[![](../../minus.gif)](../../#)<Speedometer Padding="**0 0 0 0**" PaddingEnabled="**TRUE**" Opacity="**1**" OpacityEnabled="**TRUE**" BaseWidth="**220**" BaseHeight="**120**" ToolTip="****" OuterRadius="**100,100**" CenterPosition="**110,107**">
[![](../../minus.gif)](../../#)<Scales>
[![](../../minus.gif)](../../#)<Scale Opacity="**1**" OpacityEnabled="**TRUE**" BorderEnabled="**FALSE**" BorderWidth="**0**" BorderStyle="**solid**" CenterPosition="**110,115**" Size="**0**" Length="**180**" StartAngle="**90**" MinValue="**0**" MaxValue="**180**" Step="**50**" Id="****" Name="**Scale1**" ToolTip="**Scale**" OuterRadius="**1,1**" RotateLabels="**FALSE**" DisplayLabels="**TRUE**" DisplayMajorTicks="**TRUE**" IsAbsoluteSectorOffset="**TRUE**" DisplayMinorTicks="**TRUE**" Visible="**TRUE**">
[![](../../minus.gif)](../../#)<Sectors>
[![](../../minus.gif)](../../#)<Sector Opacity="**1**" OpacityEnabled="**TRUE**" StartValue="**0**" EndValue="**180**" StartSize="**1**" EndSize="**1**" IsVisible="**TRUE**" Offset="**0**">
[![](../../minus.gif)](../../#)<Background PPType="**PP.LinearGradientBrush**" StartPoint="**0,0.5**" EndPoint="**1,0.5**" Enabled="**TRUE**">
[![](../../minus.gif)](../../#)<GradientStops>
  <GradientStop Color="**#ffd5d3d3**" Offset="**0**" />
  <GradientStop Color="**#ffd5d3d3**" Offset="**0.01**" />
  <GradientStop Color="**#ff676767**" Offset="**0.080000000000000002**" />
  <GradientStop Color="**#ffd5d3d3**" Offset="**0.25**" />
  <GradientStop Color="**#ff676767**" Offset="**0.5**" />
  <GradientStop Color="**#ffd5d3d3**" Offset="**0.75**" />
  <GradientStop Color="**#ff676767**" Offset="**0.92000000000000004**" />
  <GradientStop Color="**#ffd2d2d2**" Offset="**0.98999999999999999**" />
  <GradientStop Color="**#ffd2d2d2**" Offset="**1**" />
  </GradientStops>
  </Background>
  </Sector>
[![](../../minus.gif)](../../#)<Sector Opacity="**1**" OpacityEnabled="**TRUE**" StartValue="**0**" EndValue="**180**" StartSize="**0.94999999999999996**" EndSize="**0.94999999999999996**" IsVisible="**TRUE**" Offset="**5**">
[![](../../minus.gif)](../../#)<Background PPType="**PP.LinearGradientBrush**" StartPoint="**0,0.5**" EndPoint="**1,0.5**" Enabled="**TRUE**">
[![](../../minus.gif)](../../#)<GradientStops>
  <GradientStop Color="**#ffbebebe**" Offset="**0**" />
  <GradientStop Color="**#ffbebebe**" Offset="**0.01**" />
  <GradientStop Color="**#ffdadada**" Offset="**0.25**" />
  <GradientStop Color="**#ff767676**" Offset="**0.5**" />
  <GradientStop Color="**#ffdfdfdf**" Offset="**0.80000000000000004**" />
  <GradientStop Color="**#ffaeaeae**" Offset="**0.98999999999999999**" />
  <GradientStop Color="**#ffaeaeae**" Offset="**1**" />
  </GradientStops>
  </Background>
  </Sector>
[![](../../minus.gif)](../../#)<Sector Opacity="**1**" OpacityEnabled="**TRUE**" StartValue="**0**" EndValue="**120**" StartSize="**0.01**" EndSize="**0.01**" IsVisible="**TRUE**" Offset="**1**">
[![](../../minus.gif)](../../#)<Background PPType="**PP.LinearGradientBrush**" StartPoint="**0,0.5**" EndPoint="**1,0.5**" Enabled="**TRUE**">
[![](../../minus.gif)](../../#)<GradientStops>
  <GradientStop Color="**#ffffffff**" Offset="**0**" />
  <GradientStop Color="**#ffffffff**" Offset="**0.01**" />
  <GradientStop Color="**#ffc7c7c7**" Offset="**0.75**" />
  <GradientStop Color="**#ffd2d0d0**" Offset="**0.90000000000000002**" />
  <GradientStop Color="**#ffd2d0d0**" Offset="**1**" />
  </GradientStops>
  </Background>
  </Sector>
  </Sectors>
  </Scale>
[![](../../minus.gif)](../../#)<Scale Opacity="**1**" OpacityEnabled="**TRUE**" BorderEnabled="**FALSE**" BorderWidth="**0**" BorderStyle="**solid**" CenterPosition="**110,112**" Size="**0**" Length="**180**" StartAngle="**90**" MinValue="**0**" MaxValue="**180**" Step="**50**" Id="****" Name="**Scale2**" ToolTip="**Scale**" OuterRadius="**0.949999988079071,0.920000016689301**" RotateLabels="**FALSE**" DisplayLabels="**TRUE**" DisplayMajorTicks="**TRUE**" IsAbsoluteSectorOffset="**FALSE**" DisplayMinorTicks="**TRUE**" Visible="**TRUE**">
[![](../../minus.gif)](../../#)<Sectors>
[![](../../minus.gif)](../../#)<Sector Opacity="**1**" OpacityEnabled="**TRUE**" StartValue="**0**" EndValue="**180**" StartSize="**1**" EndSize="**1**" IsVisible="**TRUE**" Offset="**0**">
  <Background PPType="**PP.SolidColorBrush**" Color="**#ffefefef**" Opacity="**1**" Enabled="**TRUE**" />
  </Sector>
[![](../../minus.gif)](../../#)<Sector Opacity="**1**" OpacityEnabled="**TRUE**" StartValue="**0**" EndValue="**180**" StartSize="**0.01**" EndSize="**0.01**" IsVisible="**TRUE**" Offset="**0.37**">
  <Background PPType="**PP.SolidColorBrush**" Color="**#ffa2a1a1**" Opacity="**1**" Enabled="**TRUE**" />
  </Sector>
[![](../../minus.gif)](../../#)<Sector Opacity="**1**" OpacityEnabled="**TRUE**" StartValue="**0**" EndValue="**180**" StartSize="**0.01**" EndSize="**0.01**" IsVisible="**TRUE**" Offset="**0**">
  <Background PPType="**PP.SolidColorBrush**" Color="**#ff666666**" Opacity="**1**" Enabled="**TRUE**" />
  </Sector>
[![](../../minus.gif)](../../#)<Sector Opacity="**1**" OpacityEnabled="**TRUE**" StartValue="**0**" EndValue="**180**" StartSize="**0.01**" EndSize="**0.01**" IsVisible="**TRUE**" Offset="**0.38**">
  <Background PPType="**PP.SolidColorBrush**" Color="**#ffffffff**" Opacity="**1**" Enabled="**TRUE**" />
  </Sector>
  </Sectors>
  </Scale>
[![](../../minus.gif)](../../#)<Scale Opacity="**1**" OpacityEnabled="**TRUE**" BorderEnabled="**FALSE**" BorderWidth="**0**" BorderStyle="**solid**" CenterPosition="**110,107**" Size="**0**" Length="**180**" StartAngle="**90**" MinValue="**0**" MaxValue="**11.4**" Step="**0.57000000000000006**" Id="**DataScale**" Name="**Scale3**" ToolTip="**Scale**" OuterRadius="**0.949999988079071,0.875**" RotateLabels="**FALSE**" DisplayLabels="**TRUE**" DisplayMajorTicks="**TRUE**" IsAbsoluteSectorOffset="**TRUE**" DisplayMinorTicks="**TRUE**" Visible="**TRUE**">
[![](../../minus.gif)](../../#)<Arrows>
[![](../../minus.gif)](../../#)<Arrow Size="**1**" Value="**650**" Tail="**0**" Radius="**0.59999999999999998**" DimAttributeId="**Value**" PPType="**PP.Ui.LineArrow**" Opacity="**1**" OpacityEnabled="**TRUE**">
  <Border PPType="**PP.SolidColorBrush**" Color="**#ffff462c**" Opacity="**1**" />
  </Arrow>
  </Arrows>
[![](../../minus.gif)](../../#)<Labels>
  <Label>0.00</Label>  <Label>2.85</Label>  <Label>5.70</Label>  <Label>8.55</Label>  <Label>11.40</Label>  </Labels>
  <LabelFont Size="**8**" FontFamily="**Tahoma**" IsItalic="**FALSE**" IsBold="**FALSE**" IsUnderline="**FALSE**" Color="**#ff918f8d**" />
[![](../../minus.gif)](../../#)<MinorTick Opacity="**1**" OpacityEnabled="**TRUE**" Size="**0.02**" ToolTip="****" PPType="**PP.Ui.CircleMarker**" Style="**Inner**" BorderWidth="**3**" Offset="**-0.31**" BorderEnabled="**TRUE**" BorderStyle="**solid**" IsVisible="**TRUE**">
  <Background PPType="**PP.SolidColorBrush**" Color="**#ff8c8c8c**" Opacity="**1**" Enabled="**TRUE**" />
  </MinorTick>
[![](../../minus.gif)](../../#)<MajorTick Opacity="**1**" OpacityEnabled="**TRUE**" Size="**0.040000000000000001**" ToolTip="****" PPType="**PP.Ui.CircleMarker**" Style="**Inner**" BorderWidth="**3**" Offset="**-0.31**" BorderEnabled="**TRUE**" BorderStyle="**solid**" IsVisible="**TRUE**">
  <Background PPType="**PP.SolidColorBrush**" Color="**#ff8c8c8c**" Opacity="**1**" Enabled="**TRUE**" />
  </MajorTick>
[![](../../minus.gif)](../../#)<Values>
  <Value>0</Value>  <Value>2.8500000000000001</Value>  <Value>5.7000000000000002</Value>  <Value>8.5500000000000007</Value>  <Value>11.4</Value>  </Values>
  </Scale>
  </Scales>
[![](../../minus.gif)](../../#)<Timeline VerticalAlignment="**Bottom**" HorizontalAlignment="**Center**" IsVisible="**TRUE**" ReturnToInitialState="**TRUE**" IsOverlap="**FALSE**" StepDuration="**1000**" DelayDuration="**1000**" CurrentStep="**0**">
[![](../../minus.gif)](../../#)<StepsNames>
  <StepName>2009A1</StepName>  <StepName>2010A1</StepName>  <StepName>2011A1</StepName>  </StepsNames>
  </Timeline>
[![](../../minus.gif)](../../#)<Center Opacity="**1**" OpacityEnabled="**TRUE**" Size="**8**" ToolTip="**Center**" PPType="**PP.Ui.CircleMarker**" Style="**Center**" BorderWidth="**0**" Offset="**0**" BorderEnabled="**TRUE**" BorderStyle="**solid**" IsVisible="**TRUE**">
[![](../../minus.gif)](../../#)<Background PPType="**PP.LinearGradientBrush**" StartPoint="**1,1**" EndPoint="**0,-1.11022302462516E-16**" Enabled="**TRUE**">
[![](../../minus.gif)](../../#)<GradientStops>
  <GradientStop Color="**#ffff4433**" Offset="**0**" />
  <GradientStop Color="**#ffff4433**" Offset="**0.10000000000000001**" />
  <GradientStop Color="**#ffff190b**" Offset="**0.5**" />
  <GradientStop Color="**#ff9f0505**" Offset="**0.90000000000000002**" />
  <GradientStop Color="**#ff9f0505**" Offset="**1**" />
  </GradientStops>
  </Background>
  </Center>
[![](../../minus.gif)](../../#)<DataSources>
[![](../../minus.gif)](../../#)<DataSource0>
  <Series />
  </DataSource0>
  </DataSources>
  </Speedometer>
  </md>
  </metaGet>
  </SetSpeedometerResult>
  </soapenv:Body>
  </soapenv:Envelope>


[![](../../Opened.gif)![](../../Closed.gif)JSON](javascript:TextPopup(this))


### JSON-запрос:


{
 "SetSpeedometer" :
  {
   "tSpeedometer" :
    {
     "id" : "S1!M!S!AdHoc1!DSO!SCIOGHRM2O578C19!Speedometer"
    },
   "tArg" :
    {
     "meta" :
      {
       "md" :
        {
         "Speedometer" :
          {
           "@PaddingEnabled" : "TRUE",
           "@OpacityEnabled" : "TRUE",
           "@BaseHeight" : "120",
           "@CenterPosition" : "110,107",
           "@Padding" : "0 0 0 0",
           "@OuterRadius" : "100,100",
           "@Opacity" : "1",
           "@BaseWidth" : "220",
           "@ToolTip" : "",
           "Scales" :
            {
             "Scale" :
              [
                {
                 "@Name" : "Scale1",
                 "@MinValue" : "0",
                 "@Length" : "180",
                 "@RotateLabels" : "FALSE",
                 "@MaxValue" : "180",
                 "@OpacityEnabled" : "TRUE",
                 "@BorderEnabled" : "FALSE",
                 "@DisplayLabels" : "TRUE",
                 "@ToolTip" : "Scale",
                 "@Id" : "",
                 "@DisplayMajorTicks" : "TRUE",
                 "@Visible" : "TRUE",
                 "@BorderStyle" : "solid",
                 "@IsAbsoluteSectorOffset" : "TRUE",
                 "@StartAngle" : "90",
                 "@CenterPosition" : "110,115",
                 "@OuterRadius" : "1,1",
                 "@Opacity" : "1",
                 "@DisplayMinorTicks" : "TRUE",
                 "@Size" : "0",
                 "@Step" : "50",
                 "@BorderWidth" : "0",
                 "Sectors" :
                  {
                   "Sector" :
                    [
                      {
                       "@EndSize" : "1",
                       "@OpacityEnabled" : "TRUE",
                       "@EndValue" : "180",
                       "@Offset" : "0",
                       "@Opacity" : "1",
                       "@StartSize" : "1",
                       "@IsVisible" : "TRUE",
                       "@StartValue" : "0",
                       "Background" :
                        {
                         "@EndPoint" : "1,0.5",
                         "@PPType" : "PP.LinearGradientBrush",
                         "@StartPoint" : "0,0.5",
                         "@Enabled" : "TRUE",
                         "GradientStops" :
                          {
                           "GradientStop" :
                            [
                              {
                               "@Offset" : "0",
                               "@Color" : "#ffd5d3d3"
                              },
                              {
                               "@Offset" : "0.01",
                               "@Color" : "#ffd5d3d3"
                              },
                              {
                               "@Offset" : "0.080000000000000002",
                               "@Color" : "#ff676767"
                              },
                              {
                               "@Offset" : "0.25",
                               "@Color" : "#ffd5d3d3"
                              },
                              {
                               "@Offset" : "0.5",
                               "@Color" : "#ff676767"
                              },
                              {
                               "@Offset" : "0.75",
                               "@Color" : "#ffd5d3d3"
                              },
                              {
                               "@Offset" : "0.92000000000000004",
                               "@Color" : "#ff676767"
                              },
                              {
                               "@Offset" : "0.98999999999999999",
                               "@Color" : "#ffd2d2d2"
                              },
                              {
                               "@Offset" : "1",
                               "@Color" : "#ffd2d2d2"
                              }
                            ]
                          }
                        }
                      },
                      {
                       "@EndSize" : "0.94999999999999996",
                       "@OpacityEnabled" : "TRUE",
                       "@EndValue" : "180",
                       "@Offset" : "5",
                       "@Opacity" : "1",
                       "@StartSize" : "0.94999999999999996",
                       "@IsVisible" : "TRUE",
                       "@StartValue" : "0",
                       "Background" :
                        {
                         "@EndPoint" : "1,0.5",
                         "@PPType" : "PP.LinearGradientBrush",
                         "@StartPoint" : "0,0.5",
                         "@Enabled" : "TRUE",
                         "GradientStops" :
                          {
                           "GradientStop" :
                            [
                              {
                               "@Offset" : "0",
                               "@Color" : "#ffbebebe"
                              },
                              {
                               "@Offset" : "0.01",
                               "@Color" : "#ffbebebe"
                              },
                              {
                               "@Offset" : "0.25",
                               "@Color" : "#ffdadada"
                              },
                              {
                               "@Offset" : "0.5",
                               "@Color" : "#ff767676"
                              },
                              {
                               "@Offset" : "0.80000000000000004",
                               "@Color" : "#ffdfdfdf"
                              },
                              {
                               "@Offset" : "0.98999999999999999",
                               "@Color" : "#ffaeaeae"
                              },
                              {
                               "@Offset" : "1",
                               "@Color" : "#ffaeaeae"
                              }
                            ]
                          }
                        }
                      },
                      {
                       "@EndSize" : "0.01",
                       "@OpacityEnabled" : "TRUE",
                       "@EndValue" : "120",
                       "@Offset" : "1",
                       "@Opacity" : "1",
                       "@StartSize" : "0.01",
                       "@IsVisible" : "TRUE",
                       "@StartValue" : "0",
                       "Background" :
                        {
                         "@EndPoint" : "1,0.5",
                         "@PPType" : "PP.LinearGradientBrush",
                         "@StartPoint" : "0,0.5",
                         "@Enabled" : "TRUE",
                         "GradientStops" :
                          {
                           "GradientStop" :
                            [
                              {
                               "@Offset" : "0",
                               "@Color" : "#ffffffff"
                              },
                              {
                               "@Offset" : "0.01",
                               "@Color" : "#ffffffff"
                              },
                              {
                               "@Offset" : "0.75",
                               "@Color" : "#ffc7c7c7"
                              },
                              {
                               "@Offset" : "0.90000000000000002",
                               "@Color" : "#ffd2d0d0"
                              },
                              {
                               "@Offset" : "1",
                               "@Color" : "#ffd2d0d0"
                              }
                            ]
                          }
                        }
                      }
                    ]
                  }
                },
                {
                 "@Name" : "Scale2",
                 "@MinValue" : "0",
                 "@Length" : "180",
                 "@RotateLabels" : "FALSE",
                 "@MaxValue" : "180",
                 "@OpacityEnabled" : "TRUE",
                 "@BorderEnabled" : "FALSE",
                 "@DisplayLabels" : "TRUE",
                 "@ToolTip" : "Scale",
                 "@Id" : "",
                 "@DisplayMajorTicks" : "TRUE",
                 "@Visible" : "TRUE",
                 "@BorderStyle" : "solid",
                 "@IsAbsoluteSectorOffset" : "FALSE",
                 "@StartAngle" : "90",
                 "@CenterPosition" : "110,112",
                 "@OuterRadius" : "0.949999988079071,0.920000016689301",
                 "@Opacity" : "1",
                 "@DisplayMinorTicks" : "TRUE",
                 "@Size" : "0",
                 "@Step" : "50",
                 "@BorderWidth" : "0",
                 "Sectors" :
                  {
                   "Sector" :
                    [
                      {
                       "@EndSize" : "1",
                       "@OpacityEnabled" : "TRUE",
                       "@EndValue" : "180",
                       "@Offset" : "0",
                       "@Opacity" : "1",
                       "@StartSize" : "1",
                       "@IsVisible" : "TRUE",
                       "@StartValue" : "0",
                       "Background" :
                        {
                         "@PPType" : "PP.SolidColorBrush",
                         "@Opacity" : "1",
                         "@Enabled" : "TRUE",
                         "@Color" : "#ffefefef"
                        }
                      },
                      {
                       "@EndSize" : "0.01",
                       "@OpacityEnabled" : "TRUE",
                       "@EndValue" : "180",
                       "@Offset" : "0.37",
                       "@Opacity" : "1",
                       "@StartSize" : "0.01",
                       "@IsVisible" : "TRUE",
                       "@StartValue" : "0",
                       "Background" :
                        {
                         "@PPType" : "PP.SolidColorBrush",
                         "@Opacity" : "1",
                         "@Enabled" : "TRUE",
                         "@Color" : "#ffa2a1a1"
                        }
                      },
                      {
                       "@EndSize" : "0.01",
                       "@OpacityEnabled" : "TRUE",
                       "@EndValue" : "180",
                       "@Offset" : "0",
                       "@Opacity" : "1",
                       "@StartSize" : "0.01",
                       "@IsVisible" : "TRUE",
                       "@StartValue" : "0",
                       "Background" :
                        {
                         "@PPType" : "PP.SolidColorBrush",
                         "@Opacity" : "1",
                         "@Enabled" : "TRUE",
                         "@Color" : "#ff666666"
                        }
                      },
                      {
                       "@EndSize" : "0.01",
                       "@OpacityEnabled" : "TRUE",
                       "@EndValue" : "180",
                       "@Offset" : "0.38",
                       "@Opacity" : "1",
                       "@StartSize" : "0.01",
                       "@IsVisible" : "TRUE",
                       "@StartValue" : "0",
                       "Background" :
                        {
                         "@PPType" : "PP.SolidColorBrush",
                         "@Opacity" : "1",
                         "@Enabled" : "TRUE",
                         "@Color" : "#ffffffff"
                        }
                      }
                    ]
                  }
                },
                {
                 "@Name" : "Scale3",
                 "@MinValue" : "0",
                 "@Length" : "180",
                 "@RotateLabels" : "FALSE",
                 "@MaxValue" : "11.4",
                 "@OpacityEnabled" : "TRUE",
                 "@BorderEnabled" : "FALSE",
                 "@DisplayLabels" : "TRUE",
                 "@ToolTip" : "Scale",
                 "@DataSource" : "DataSource0",
                 "@Id" : "DataScale",
                 "@DisplayMajorTicks" : "TRUE",
                 "@Visible" : "TRUE",
                 "@BorderStyle" : "solid",
                 "@IsAbsoluteSectorOffset" : "TRUE",
                 "@StartAngle" : "90",
                 "@CenterPosition" : "110,107",
                 "@OuterRadius" : "0.949999988079071,0.875",
                 "@Opacity" : "1",
                 "@DisplayMinorTicks" : "TRUE",
                 "@Size" : "0",
                 "@Step" : "0.57000000000000006",
                 "@BorderWidth" : "0",
                 "Arrows" :
                  {
                   "Arrow" :
                    [
                      {
                       "@PPType" : "PP.Ui.LineArrow",
                       "@OpacityEnabled" : "TRUE",
                       "@Radius" : "0.59999999999999998",
                       "@Opacity" : "1",
                       "@Tail" : "0",
                       "@Size" : "1",
                       "@DimAttributeId" : "Value",
                       "@Value" : "650",
                       "Border" :
                        {
                         "@PPType" : "PP.SolidColorBrush",
                         "@Opacity" : "1",
                         "@Color" : "#ffff462c"
                        }
                      }
                    ]
                  },
                 "Labels" :
                  {
                   "Label" :
                    [
                      "0.00",
                      "2.85",
                      "5.70",
                      "8.55",
                      "11.40"
                    ]
                  },
                 "LabelFont" :
                  {
                   "@IsItalic" : "FALSE",
                   "@IsUnderline" : "FALSE",
                   "@FontFamily" : "Tahoma",
                   "@Size" : "8",
                   "@IsBold" : "FALSE",
                   "@Color" : "#ff918f8d"
                  },
                 "MinorTick" :
                  {
                   "@Style" : "Inner",
                   "@PPType" : "PP.Ui.CircleMarker",
                   "@OpacityEnabled" : "TRUE",
                   "@Offset" : "-0.31",
                   "@Opacity" : "1",
                   "@BorderEnabled" : "TRUE",
                   "@IsVisible" : "TRUE",
                   "@Size" : "0.02",
                   "@ToolTip" : "",
                   "@BorderWidth" : "3",
                   "@BorderStyle" : "solid",
                   "Background" :
                    {
                     "@PPType" : "PP.SolidColorBrush",
                     "@Opacity" : "1",
                     "@Enabled" : "TRUE",
                     "@Color" : "#ff8c8c8c"
                    }
                  },
                 "MajorTick" :
                  {
                   "@Style" : "Inner",
                   "@PPType" : "PP.Ui.CircleMarker",
                   "@OpacityEnabled" : "TRUE",
                   "@Offset" : "-0.31",
                   "@Opacity" : "1",
                   "@BorderEnabled" : "TRUE",
                   "@IsVisible" : "TRUE",
                   "@Size" : "0.040000000000000001",
                   "@ToolTip" : "",
                   "@BorderWidth" : "3",
                   "@BorderStyle" : "solid",
                   "Background" :
                    {
                     "@PPType" : "PP.SolidColorBrush",
                     "@Opacity" : "1",
                     "@Enabled" : "TRUE",
                     "@Color" : "#ff8c8c8c"
                    }
                  },
                 "Values" :
                  {
                   "Value" :
                    [
                      "0",
                      "2.8500000000000001",
                      "5.7000000000000002",
                      "8.5500000000000007",
                      "11.4"
                    ]
                  }
                }
              ]
            },
           "Timeline" :
            {
             "@StepDuration" : "1000",
             "@IsOverlap" : "FALSE",
             "@DelayDuration" : "1000",
             "@VerticalAlignment" : "Bottom",
             "@HorizontalAlignment" : "Center",
             "@IsVisible" : "TRUE",
             "@ReturnToInitialState" : "TRUE",
             "@CurrentStep" : "0",
             "StepsNames" :
              {
               "StepName" :
                [
                  "2009A1",
                  "2010A1",
                  "2011A1"
                ]
              }
            },
           "Center" :
            {
             "@Style" : "Center",
             "@PPType" : "PP.Ui.CircleMarker",
             "@OpacityEnabled" : "TRUE",
             "@Offset" : "0",
             "@Opacity" : "1",
             "@BorderEnabled" : "TRUE",
             "@IsVisible" : "TRUE",
             "@Size" : "8",
             "@ToolTip" : "Center",
             "@BorderWidth" : "0",
             "@BorderStyle" : "solid",
             "Background" :
              {
               "@EndPoint" : "0,-1.11022302462516E-16",
               "@PPType" : "PP.LinearGradientBrush",
               "@StartPoint" : "1,1",
               "@Enabled" : "TRUE",
               "GradientStops" :
                {
                 "GradientStop" :
                  [
                    {
                     "@Offset" : "0",
                     "@Color" : "#ffff4433"
                    },
                    {
                     "@Offset" : "0.10000000000000001",
                     "@Color" : "#ffff4433"
                    },
                    {
                     "@Offset" : "0.5",
                     "@Color" : "#ffff190b"
                    },
                    {
                     "@Offset" : "0.90000000000000002",
                     "@Color" : "#ff9f0505"
                    },
                    {
                     "@Offset" : "1",
                     "@Color" : "#ff9f0505"
                    }
                  ]
                }
              }
            },
           "DataSources" :
            {
             "DataSource0" :
              {
               "Series" :
                {
                 "Value" :
                  {
                   "@Items" : "5.7000000000000002 5.7000000000000002 5.7000000000000002"
                  }
                }
              }
            }
          }
        }
      },
     "metaGet" :
      {
       "metaData" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "SetSpeedometerResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!AdHoc1!DSO!SCIOGHRM2O578C19!Speedometer"
    },
   "metaGet" :
    {
     "md" :
      {
       "Speedometer" :
        {
         "@PaddingEnabled" : "TRUE",
         "@OpacityEnabled" : "TRUE",
         "@BaseHeight" : "120",
         "@CenterPosition" : "110,107",
         "@Padding" : "0 0 0 0",
         "@OuterRadius" : "100,100",
         "@Opacity" : "1",
         "@BaseWidth" : "220",
         "@ToolTip" : "",
         "Scales" :
          {
           "Scale" :
            [
              {
               "@Name" : "Scale1",
               "@MinValue" : "0",
               "@Length" : "180",
               "@RotateLabels" : "FALSE",
               "@MaxValue" : "180",
               "@OpacityEnabled" : "TRUE",
               "@BorderEnabled" : "FALSE",
               "@DisplayLabels" : "TRUE",
               "@ToolTip" : "Scale",
               "@Id" : "",
               "@DisplayMajorTicks" : "TRUE",
               "@Visible" : "TRUE",
               "@BorderStyle" : "solid",
               "@IsAbsoluteSectorOffset" : "TRUE",
               "@StartAngle" : "90",
               "@CenterPosition" : "110,115",
               "@OuterRadius" : "1,1",
               "@Opacity" : "1",
               "@DisplayMinorTicks" : "TRUE",
               "@Size" : "0",
               "@Step" : "50",
               "@BorderWidth" : "0",
               "Sectors" :
                {
                 "Sector" :
                  [
                    {
                     "@EndSize" : "1",
                     "@OpacityEnabled" : "TRUE",
                     "@EndValue" : "180",
                     "@Offset" : "0",
                     "@Opacity" : "1",
                     "@StartSize" : "1",
                     "@IsVisible" : "TRUE",
                     "@StartValue" : "0",
                     "Background" :
                      {
                       "@EndPoint" : "1,0.5",
                       "@PPType" : "PP.LinearGradientBrush",
                       "@StartPoint" : "0,0.5",
                       "@Enabled" : "TRUE",
                       "GradientStops" :
                        {
                         "GradientStop" :
                          [
                            {
                             "@Offset" : "0",
                             "@Color" : "#ffd5d3d3"
                            },
                            {
                             "@Offset" : "0.01",
                             "@Color" : "#ffd5d3d3"
                            },
                            {
                             "@Offset" : "0.080000000000000002",
                             "@Color" : "#ff676767"
                            },
                            {
                             "@Offset" : "0.25",
                             "@Color" : "#ffd5d3d3"
                            },
                            {
                             "@Offset" : "0.5",
                             "@Color" : "#ff676767"
                            },
                            {
                             "@Offset" : "0.75",
                             "@Color" : "#ffd5d3d3"
                            },
                            {
                             "@Offset" : "0.92000000000000004",
                             "@Color" : "#ff676767"
                            },
                            {
                             "@Offset" : "0.98999999999999999",
                             "@Color" : "#ffd2d2d2"
                            },
                            {
                             "@Offset" : "1",
                             "@Color" : "#ffd2d2d2"
                            }
                          ]
                        }
                      }
                    },
                    {
                     "@EndSize" : "0.94999999999999996",
                     "@OpacityEnabled" : "TRUE",
                     "@EndValue" : "180",
                     "@Offset" : "5",
                     "@Opacity" : "1",
                     "@StartSize" : "0.94999999999999996",
                     "@IsVisible" : "TRUE",
                     "@StartValue" : "0",
                     "Background" :
                      {
                       "@EndPoint" : "1,0.5",
                       "@PPType" : "PP.LinearGradientBrush",
                       "@StartPoint" : "0,0.5",
                       "@Enabled" : "TRUE",
                       "GradientStops" :
                        {
                         "GradientStop" :
                          [
                            {
                             "@Offset" : "0",
                             "@Color" : "#ffbebebe"
                            },
                            {
                             "@Offset" : "0.01",
                             "@Color" : "#ffbebebe"
                            },
                            {
                             "@Offset" : "0.25",
                             "@Color" : "#ffdadada"
                            },
                            {
                             "@Offset" : "0.5",
                             "@Color" : "#ff767676"
                            },
                            {
                             "@Offset" : "0.80000000000000004",
                             "@Color" : "#ffdfdfdf"
                            },
                            {
                             "@Offset" : "0.98999999999999999",
                             "@Color" : "#ffaeaeae"
                            },
                            {
                             "@Offset" : "1",
                             "@Color" : "#ffaeaeae"
                            }
                          ]
                        }
                      }
                    },
                    {
                     "@EndSize" : "0.01",
                     "@OpacityEnabled" : "TRUE",
                     "@EndValue" : "120",
                     "@Offset" : "1",
                     "@Opacity" : "1",
                     "@StartSize" : "0.01",
                     "@IsVisible" : "TRUE",
                     "@StartValue" : "0",
                     "Background" :
                      {
                       "@EndPoint" : "1,0.5",
                       "@PPType" : "PP.LinearGradientBrush",
                       "@StartPoint" : "0,0.5",
                       "@Enabled" : "TRUE",
                       "GradientStops" :
                        {
                         "GradientStop" :
                          [
                            {
                             "@Offset" : "0",
                             "@Color" : "#ffffffff"
                            },
                            {
                             "@Offset" : "0.01",
                             "@Color" : "#ffffffff"
                            },
                            {
                             "@Offset" : "0.75",
                             "@Color" : "#ffc7c7c7"
                            },
                            {
                             "@Offset" : "0.90000000000000002",
                             "@Color" : "#ffd2d0d0"
                            },
                            {
                             "@Offset" : "1",
                             "@Color" : "#ffd2d0d0"
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              },
              {
               "@Name" : "Scale2",
               "@MinValue" : "0",
               "@Length" : "180",
               "@RotateLabels" : "FALSE",
               "@MaxValue" : "180",
               "@OpacityEnabled" : "TRUE",
               "@BorderEnabled" : "FALSE",
               "@DisplayLabels" : "TRUE",
               "@ToolTip" : "Scale",
               "@Id" : "",
               "@DisplayMajorTicks" : "TRUE",
               "@Visible" : "TRUE",
               "@BorderStyle" : "solid",
               "@IsAbsoluteSectorOffset" : "FALSE",
               "@StartAngle" : "90",
               "@CenterPosition" : "110,112",
               "@OuterRadius" : "0.949999988079071,0.920000016689301",
               "@Opacity" : "1",
               "@DisplayMinorTicks" : "TRUE",
               "@Size" : "0",
               "@Step" : "50",
               "@BorderWidth" : "0",
               "Sectors" :
                {
                 "Sector" :
                  [
                    {
                     "@EndSize" : "1",
                     "@OpacityEnabled" : "TRUE",
                     "@EndValue" : "180",
                     "@Offset" : "0",
                     "@Opacity" : "1",
                     "@StartSize" : "1",
                     "@IsVisible" : "TRUE",
                     "@StartValue" : "0",
                     "Background" :
                      {
                       "@PPType" : "PP.SolidColorBrush",
                       "@Opacity" : "1",
                       "@Enabled" : "TRUE",
                       "@Color" : "#ffefefef"
                      }
                    },
                    {
                     "@EndSize" : "0.01",
                     "@OpacityEnabled" : "TRUE",
                     "@EndValue" : "180",
                     "@Offset" : "0.37",
                     "@Opacity" : "1",
                     "@StartSize" : "0.01",
                     "@IsVisible" : "TRUE",
                     "@StartValue" : "0",
                     "Background" :
                      {
                       "@PPType" : "PP.SolidColorBrush",
                       "@Opacity" : "1",
                       "@Enabled" : "TRUE",
                       "@Color" : "#ffa2a1a1"
                      }
                    },
                    {
                     "@EndSize" : "0.01",
                     "@OpacityEnabled" : "TRUE",
                     "@EndValue" : "180",
                     "@Offset" : "0",
                     "@Opacity" : "1",
                     "@StartSize" : "0.01",
                     "@IsVisible" : "TRUE",
                     "@StartValue" : "0",
                     "Background" :
                      {
                       "@PPType" : "PP.SolidColorBrush",
                       "@Opacity" : "1",
                       "@Enabled" : "TRUE",
                       "@Color" : "#ff666666"
                      }
                    },
                    {
                     "@EndSize" : "0.01",
                     "@OpacityEnabled" : "TRUE",
                     "@EndValue" : "180",
                     "@Offset" : "0.38",
                     "@Opacity" : "1",
                     "@StartSize" : "0.01",
                     "@IsVisible" : "TRUE",
                     "@StartValue" : "0",
                     "Background" :
                      {
                       "@PPType" : "PP.SolidColorBrush",
                       "@Opacity" : "1",
                       "@Enabled" : "TRUE",
                       "@Color" : "#ffffffff"
                      }
                    }
                  ]
                }
              },
              {
               "@Name" : "Scale3",
               "@MinValue" : "0",
               "@Length" : "180",
               "@RotateLabels" : "FALSE",
               "@MaxValue" : "11.4",
               "@OpacityEnabled" : "TRUE",
               "@BorderEnabled" : "FALSE",
               "@DisplayLabels" : "TRUE",
               "@ToolTip" : "Scale",
               "@Id" : "DataScale",
               "@DisplayMajorTicks" : "TRUE",
               "@Visible" : "TRUE",
               "@BorderStyle" : "solid",
               "@IsAbsoluteSectorOffset" : "TRUE",
               "@StartAngle" : "90",
               "@CenterPosition" : "110,107",
               "@OuterRadius" : "0.949999988079071,0.875",
               "@Opacity" : "1",
               "@DisplayMinorTicks" : "TRUE",
               "@Size" : "0",
               "@Step" : "0.57000000000000006",
               "@BorderWidth" : "0",
               "Arrows" :
                {
                 "Arrow" :
                  [
                    {
                     "@PPType" : "PP.Ui.LineArrow",
                     "@OpacityEnabled" : "TRUE",
                     "@Radius" : "0.59999999999999998",
                     "@Opacity" : "1",
                     "@Tail" : "0",
                     "@Size" : "1",
                     "@DimAttributeId" : "Value",
                     "@Value" : "650",
                     "Border" :
                      {
                       "@PPType" : "PP.SolidColorBrush",
                       "@Opacity" : "1",
                       "@Color" : "#ffff462c"
                      }
                    }
                  ]
                },
               "Labels" :
                {
                 "Label" :
                  [
                    "0.00",
                    "2.85",
                    "5.70",
                    "8.55",
                    "11.40"
                  ]
                },
               "LabelFont" :
                {
                 "@IsItalic" : "FALSE",
                 "@IsUnderline" : "FALSE",
                 "@FontFamily" : "Tahoma",
                 "@Size" : "8",
                 "@IsBold" : "FALSE",
                 "@Color" : "#ff918f8d"
                },
               "MinorTick" :
                {
                 "@Style" : "Inner",
                 "@PPType" : "PP.Ui.CircleMarker",
                 "@OpacityEnabled" : "TRUE",
                 "@Offset" : "-0.31",
                 "@Opacity" : "1",
                 "@BorderEnabled" : "TRUE",
                 "@IsVisible" : "TRUE",
                 "@Size" : "0.02",
                 "@ToolTip" : "",
                 "@BorderWidth" : "3",
                 "@BorderStyle" : "solid",
                 "Background" :
                  {
                   "@PPType" : "PP.SolidColorBrush",
                   "@Opacity" : "1",
                   "@Enabled" : "TRUE",
                   "@Color" : "#ff8c8c8c"
                  }
                },
               "MajorTick" :
                {
                 "@Style" : "Inner",
                 "@PPType" : "PP.Ui.CircleMarker",
                 "@OpacityEnabled" : "TRUE",
                 "@Offset" : "-0.31",
                 "@Opacity" : "1",
                 "@BorderEnabled" : "TRUE",
                 "@IsVisible" : "TRUE",
                 "@Size" : "0.040000000000000001",
                 "@ToolTip" : "",
                 "@BorderWidth" : "3",
                 "@BorderStyle" : "solid",
                 "Background" :
                  {
                   "@PPType" : "PP.SolidColorBrush",
                   "@Opacity" : "1",
                   "@Enabled" : "TRUE",
                   "@Color" : "#ff8c8c8c"
                  }
                },
               "Values" :
                {
                 "Value" :
                  [
                    "0",
                    "2.8500000000000001",
                    "5.7000000000000002",
                    "8.5500000000000007",
                    "11.4"
                  ]
                }
              }
            ]
          },
         "Timeline" :
          {
           "@StepDuration" : "1000",
           "@IsOverlap" : "FALSE",
           "@DelayDuration" : "1000",
           "@VerticalAlignment" : "Bottom",
           "@HorizontalAlignment" : "Center",
           "@IsVisible" : "TRUE",
           "@ReturnToInitialState" : "TRUE",
           "@CurrentStep" : "0",
           "StepsNames" :
            {
             "StepName" :
              [
                "2009A1",
                "2010A1",
                "2011A1"
              ]
            }
          },
         "Center" :
          {
           "@Style" : "Center",
           "@PPType" : "PP.Ui.CircleMarker",
           "@OpacityEnabled" : "TRUE",
           "@Offset" : "0",
           "@Opacity" : "1",
           "@BorderEnabled" : "TRUE",
           "@IsVisible" : "TRUE",
           "@Size" : "8",
           "@ToolTip" : "Center",
           "@BorderWidth" : "0",
           "@BorderStyle" : "solid",
           "Background" :
            {
             "@EndPoint" : "0,-1.11022302462516E-16",
             "@PPType" : "PP.LinearGradientBrush",
             "@StartPoint" : "1,1",
             "@Enabled" : "TRUE",
             "GradientStops" :
              {
               "GradientStop" :
                [
                  {
                   "@Offset" : "0",
                   "@Color" : "#ffff4433"
                  },
                  {
                   "@Offset" : "0.10000000000000001",
                   "@Color" : "#ffff4433"
                  },
                  {
                   "@Offset" : "0.5",
                   "@Color" : "#ffff190b"
                  },
                  {
                   "@Offset" : "0.90000000000000002",
                   "@Color" : "#ff9f0505"
                  },
                  {
                   "@Offset" : "1",
                   "@Color" : "#ff9f0505"
                  }
                ]
              }
            }
          },
         "DataSources" :
          {
           "DataSource0" :
            {
             "Series" : ""
            }
          }
        }
      }
    }
  }
}


[![](../../Opened.gif)![](../../Closed.gif)C#](javascript:TextPopup(this))


public static SetSpeedometerResult SetSpeedometerNewSettings(string moniker, System.Xml.XmlElement settings)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tSet = new SetSpeedometer()
    {
        tArg = new SetSpeedometerArg()
        {
            meta = new SpeedometerMd()
            {
                //Новые настройки спидометра
                md = settings
            },
            metaGet = new SpeedometerMdPattern()
            {
                metaData = true
            }
        },
        tSpeedometer = new SpeedometerId() { id = moniker }
    };
    // Изменяем настройки спидометра
    var result = somClient.SetSpeedometer(tSet);
    return result;
}


См. также:


[Интерактивные
 визуальные компоненты](Visualizators_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
