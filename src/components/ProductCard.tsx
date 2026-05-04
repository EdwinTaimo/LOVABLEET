import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '../data/products';

interface Props {
  product: Product;
  onAdd: (p: Product) => void;
}

export const ProductCard = ({ product, onAdd }: Props) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      className="bg-[#0F1C30] border border-emerald-500/10 rounded-3xl overflow-hidden group hover:border-emerald-500/40 transition-all shadow-xl"
    >
      <div className="h-48 w-full bg-[#060C18] relative overflow-hidden">
        {product.image ? (
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0B1425] to-[#122035]">
            <span className="text-emerald-500 font-black text-xl uppercase tracking-tighter text-center px-4">
              {product.name}
            </span>
          </div>
        )}
        <div className="absolute top-3 left-3 bg-emerald-500 text-[#060C18] text-[10px] font-bold px-2 py-1 rounded-full uppercase">
          {product.category}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-white font-bold text-lg mb-1 tracking-tight">{product.name}</h3>
        <p className="text-gray-400 text-xs mb-4 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
            {product.price} <small className="text-[10px] text-gray-500 uppercase">MT</small>
          </span>
          <button 
            onClick={() => onAdd(product)}
            className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-2 rounded-xl hover:bg-emerald-500 hover:text-black transition-colors"
          >
            🛒
          </button>
        </div>
      </div>
    </motion.div>
  );
};
