title('Entity-relationship diagram.');
description('Make your database structure visible.');
dimension(2000, 2000);

var intervalX = 100;
var intervalY = 120;
var radiusX = 40;
var radiusY = 20;
var eWidth = radiusX*2;
var eHeight = radiusY*2;

function calcX(n)
{
    return intervalX*n
}
function calcY(n)
{
    return (intervalY*n - (intervalY/2))
}

function calcX2(n)
{
    return (intervalX*n - radiusX)
}
function calcY2(n)
{
    return (intervalY*n - radiusY)
}


var erd = Joint.dia.erd;
Joint.paper("world", 800, 2000);

var m1 = erd.Attribute.create({
        ellipse: { x: calcX(1), y: calcY(1), rx: radiusX, ry: radiusY },
        label: "DNA_Forward",
        primaryKey: true
});
var m2 = erd.Attribute.create({
        ellipse: { x: calcX(2), y: calcY(1), rx: radiusX, ry: radiusY },
        label: "DNA_Reverse",
        primaryKey: true
});
var m3 = erd.Attribute.create({
        ellipse: { x: calcX(1), y: calcY(2), rx: radiusX, ry: radiusY },
        label: "DNA_Forward"
});
var m4 = erd.Attribute.create({
        ellipse: { x: calcX(2), y: calcY(2), rx: radiusX, ry: radiusY },
        label: "DNA_Reverse"
});
var m5 = erd.Attribute.create({
        ellipse: { x: calcX(3), y: calcY(2), rx: radiusX, ry: radiusY },
        label: "DNA_pLacl"
});
var m6 = erd.Attribute.create({
        ellipse: { x: calcX(2), y: calcY(3), rx: radiusX, ry: radiusY },
        label: "Tube_05708"
});
var m7 = erd.Attribute.create({
        ellipse: { x: calcX(2), y: calcY(4), rx: radiusX, ry: radiusY },
        label: "Diagram",
        multivalued: true
});
var m8 = erd.Attribute.create({
        ellipse: { x: calcX(4), y: calcY(2), rx: radiusX, ry: radiusY },
        label: "DNA_ANDgate_AHL_IPTG"
});
var m9 = erd.Attribute.create({
        ellipse: { x: calcX(5), y: calcY(2), rx: radiusX, ry: radiusY },
        label: "EcoRI"
});
var m10 = erd.Attribute.create({
        ellipse: { x: calcX(4), y: calcY(3), rx: radiusX, ry: radiusY },
        label: "Tube_1970a"
});
var m11 = erd.Attribute.create({
        ellipse: { x: calcX(4), y: calcY(4), rx: radiusX, ry: radiusY },
        label: "Diagram",
        multivalued: true
});
var m12 = erd.Attribute.create({
        ellipse: { x: calcX(3), y: calcY(4), rx: radiusX, ry: radiusY },
        label: "Tube_c03dc"
});
var m13 = erd.Attribute.create({
        ellipse: { x: calcX(5), y: calcY(4), rx: radiusX, ry: radiusY },
        label: "competent cells(quickDH5α)"
});
var m14 = erd.Attribute.create({
        ellipse: { x: calcX(3), y: calcY(5), rx: radiusX, ry: radiusY },
        label: "Plate_1ba71"
});
var m15 = erd.Attribute.create({
        ellipse: { x: calcX(3), y: calcY(6), rx: radiusX, ry: radiusY },
        label: "Tube_ff21c"
});
var m16 = erd.Attribute.create({
        ellipse: { x: calcX(3), y: calcY(7), rx: radiusX, ry: radiusY },
        label: "Tube_6a40a"
});


var e1 = erd.Entity.create({
        rect: { x: calcX2(1), y: calcY2(1), width: eWidth, height: eHeight },
        label: "Dilution"
});
var e2 = erd.Entity.create({
        rect: { x: calcX2(2), y: calcY2(1), width: eWidth, height: eHeight },
        label: "Dilution"
});
var e3 = erd.Entity.create({
        rect: { x: calcX2(2), y: calcY2(2), width: eWidth, height: eHeight },
        label: "PCR"
});
var e4 = erd.Entity.create({
        rect: { x: calcX2(2), y: calcY2(3), width: eWidth, height: eHeight },
        label: "Electrophoresis"
});
var e5 = erd.Entity.create({
        rect: { x: calcX2(4), y: calcY2(2), width: eWidth, height: eHeight },
        label: "Restriction enzyme"
});
var e6 = erd.Entity.create({
        rect: { x: calcX2(4), y: calcY2(3), width: eWidth, height: eHeight },
        label: "Electrophoresis"
});
var e7 = erd.Entity.create({
        rect: { x: calcX2(3), y: calcY2(3), width: eWidth, height: eHeight },
        label: "In-Fusion"
});
var e8 = erd.Entity.create({
        rect: { x: calcX2(3), y: calcY2(4), width: eWidth, height: eHeight },
        label: "Transformation"
});
var e9 = erd.Entity.create({
        rect: { x: calcX2(3), y: calcY2(5), width: eWidth, height: eHeight },
        label: "culture"
});
var e10 = erd.Entity.create({
        rect: { x: calcX2(3), y: calcY2(6), width: eWidth, height: eHeight },
        label: "miniprep"
});


m1.joint(e1, erd.arrow);
m2.joint(e2, erd.arrow);
e1.joint(m3, erd.arrow);
e2.joint(m4, erd.arrow);
m3.joint(e3, erd.arrow);
m4.joint(e3, erd.arrow);
m5.joint(e3, erd.arrow);
e3.joint(m6, erd.arrow);
m6.joint(e4, erd.arrow);
e4.joint(m7, erd.arrow);
m8.joint(e5, erd.arrow);
m9.joint(e5, erd.arrow);
e5.joint(m10, erd.arrow);
m6.joint(e7, erd.arrow);
m10.joint(e6, erd.arrow);
e6.joint(m11, erd.arrow);
m10.joint(e7, erd.arrow);
e7.joint(m12, erd.arrow);
m12.joint(e8, erd.arrow);
m13.joint(e8, erd.arrow);
e8.joint(m14, erd.arrow);
m14.joint(e9, erd.arrow);
e9.joint(m15, erd.arrow);
