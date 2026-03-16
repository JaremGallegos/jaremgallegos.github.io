local Aboutme(id, data) = {
  id: id,
  title: data.name,
  description: data.desc,
  icon: data.icon,
  isNew: if id == 3 then true else false,
};

local raw_features = [
  { name: 'Transparencia', desc: 'Acceso total a la información.', icon: 'eye' },
  { name: 'Confianza', desc: 'Procesos validados.', icon: 'shield' },
  { name: 'Eficiencia', desc: 'Optimización de servicios.', icon: 'zap' },
];

{
  items: [
    Aboutme(i + 1, raw_features[i]) for i in std.range(0, std.length(raw_features) - 1)
  ],
  total: std.length(raw_features),
}